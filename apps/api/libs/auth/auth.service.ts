import { ForbiddenException, Injectable } from '@nestjs/common';
import { RegisterInput } from './dto/register.input';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { hash, compare } from 'bcryptjs';
import { LogInInput } from './dto/login.input';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(registerInput: RegisterInput) {
    const hashedPassword = await hash(registerInput.password, 10);
    const user = await this.prisma.user.create({
      data: {
        username: registerInput.username,
        hashedPassword,
        email: registerInput.email,
      },
    });

    const { accessToken, refreshToken } = await this.createToken(
      user.id,
      user.email,
    );

    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }

  async signin(logInInput: LogInInput) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: logInInput.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }
    const doPasswordsMatch = await compare(
      logInInput.password,
      user.hashedPassword,
    );

    if (!doPasswordsMatch) {
      throw new ForbiddenException('Invalid credentials');
    }
    const { accessToken, refreshToken } = await this.createToken(
      user.id,
      user.email,
    );
    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }

  async logout(userId: string) {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRefreshToken: { not: null },
      },
      data: { hashedRefreshToken: null },
    });
    return true;
  }
  async getMe(accessToken: string) {
    // Verify the JWT token and decode the payload
    const userInfo = this.jwtService.decode(accessToken);
    const user = await this.prisma.user.findUnique({
      where: { id: userInfo['userId'] },
    });
    if (!user) {
      throw new ForbiddenException('No logged in user');
    }
    return user;
  }
  async refreshAuth(userId: string, rt: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }
    const doRefreshTokensMatch = await compare(rt, user.hashedRefreshToken);
    if (!doRefreshTokensMatch) {
      throw new ForbiddenException('Invalid credentials');
    }

    const { accessToken, refreshToken } = await this.createToken(
      user.id,
      user.email,
    );
    await this.updateRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken, user };
  }
  async createToken(userId: string, email: string) {
    const accessToken = this.jwtService.sign(
      { userId, email },
      {
        secret: this.configService.get<string>('jwt.access'),
        expiresIn: this.configService.get<string>('jwt.accessExpiration'),
      },
    );
    const refreshToken = this.jwtService.sign(
      { userId, email, accessToken },
      {
        secret: this.configService.get<string>('jwt.refresh'),
        expiresIn: this.configService.get<string>('jwt.refreshExpiration'),
      },
    );

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await hash(refreshToken, 10);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: { hashedRefreshToken },
    });
  }
}
