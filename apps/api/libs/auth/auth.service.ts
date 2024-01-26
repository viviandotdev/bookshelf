import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { RegisterInput } from './dto/register.input';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { hash, compare } from 'bcryptjs';
import { LogInInput } from './dto/login.input';
import { PrismaRepository } from 'prisma/prisma.repository';
import { OAuthInput } from './dto/oauth.input';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly prisma: PrismaRepository,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async generateEmailVerificationToken(email: string) {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await this.prisma.verificationToken.findUnique({
      where: {
        token,
      },
    });

    if (existingToken) {
      await this.prisma.verificationToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    const verficationToken = await this.prisma.verificationToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    return verficationToken.token;
  }

  async signup(registerInput: RegisterInput) {
    const hashedPassword = await hash(registerInput.password, 10);
    // Create the associated account
    const emailExists = await this.prisma.user.findUnique({
      where: {
        email: registerInput.email,
      },
    });
    //   Email already in use with another provider

    if (emailExists) {
      throw new ForbiddenException('Email already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        username: registerInput.username,
        hashedPassword,
        email: registerInput.email,
      },
    });

    return user;
  }

  async oAuthLogin(oAuthInput: OAuthInput) {
    // Check if the user exists only create if not exists
    const existingUser = await this.prisma.user.findUnique({
      where: {
        id: oAuthInput.providerAccountId,
      },
    });
    let user;

    if (!existingUser) {
      // Create the associated account
      const emailExists = await this.prisma.user.findUnique({
        where: {
          email: oAuthInput.email,
        },
      });
      //   Email already in use with another provider

      if (emailExists) {
        throw new ForbiddenException('Email already exists');
      }

      user = await this.prisma.user.create({
        data: {
          id: oAuthInput.providerAccountId,
          username: oAuthInput.username,
          email: oAuthInput.email,
          emailVerified: new Date(),
          image: oAuthInput.image,
        },
      });

      await this.prisma.account.create({
        data: {
          access_token: oAuthInput.access_token,
          token_type: oAuthInput.token_type, // Include other properties from the DTO as needed
          scope: oAuthInput.scope,
          provider: oAuthInput.provider,
          type: oAuthInput.type,
          providerAccountId: oAuthInput.providerAccountId,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    }

    const { accessToken, refreshToken } = await this.createToken(
      user ? user.id : existingUser.id,
      user ? user.email : existingUser.email,
      user ? user.username : existingUser.username,
    );

    const payload = this.jwtService.decode(accessToken);
    await this.updateRefreshToken(
      user ? user.id : existingUser.id,
      refreshToken,
    );

    return {
      accessToken,
      refreshToken,
      user: user || existingUser,
      expiresIn: payload['exp'],
    };
  }
  async signin(logInInput: LogInInput) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: logInInput.email,
      },
    });

    if (!user || !user.email) {
      throw new ForbiddenException('Email does not exist');
    }

    if (!user.emailVerified) {
      console.log(user.email);
      const verificationToken = await this.generateEmailVerificationToken(
        user.email,
      );
      //   send Verification email to user that has not verified their email

      throw new ForbiddenException('Email not verified');
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
