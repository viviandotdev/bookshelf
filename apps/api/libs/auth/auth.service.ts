import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { RegisterInput } from './dto/register.input';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { hash, compare } from 'bcryptjs';
import { LogInInput } from './dto/login.input';
import { PrismaRepository } from 'prisma/prisma.repository';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly prisma: PrismaRepository,
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

    return user;
  }

  async signin(logInInput: LogInInput) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: logInInput.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Email does not exist');
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
      user.username,
    );
    const payload = this.jwtService.decode(accessToken);
    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user, expiresIn: payload['exp'] };
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
  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
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
      user.username,
    );
    const payload = this.jwtService.decode(accessToken);
    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user, expiresIn: payload['exp'] };
  }
  async createToken(userId: string, email: string, username: string) {
    const accessToken = this.jwtService.sign(
      { userId, email, username },
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
