import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { RegisterInput } from './dto/register.input';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { hash, compare } from 'bcryptjs';
import { LogInInput } from './dto/login.input';
import { PrismaRepository } from 'prisma/prisma.repository';
import { OAuthInput } from './dto/oauth.input';
import { v4 as uuidv4 } from 'uuid';
import { Resend } from 'resend';
import { User } from '@prisma/client';
import {
  AccountCreateInput,
  UserCreateInput,
} from '@bookcue/api/generated-db-types';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly resend = new Resend(
    this.configService.get<string>('resend.api'),
  );
  private readonly domain = this.configService.get<string>('web.url');

  constructor(
    private readonly prisma: PrismaRepository,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  findUnique = this.prisma.user.findUnique;
  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Email does not exist');
    }

    // const verificationToken = await this.generateEmailVerificationToken(
    //   user.email,
    // );
    // Send email
    // const confirmLink = `${this.domain}/auth/new-verification?token=${verificationToken}`;
    // confirmation email not sending
  }
  async verifyToken(token: string) {
    const existingToken = await this.prisma.verificationToken.findUnique({
      where: {
        token,
      },
    });

    if (!existingToken) {
      throw new ForbiddenException('Invalid token');
    }

    if (existingToken.expires < new Date()) {
      throw new ForbiddenException('Token expired');
    }

    await this.prisma.user.update({
      where: {
        email: existingToken.email,
      },
      data: {
        email: existingToken.email,
        emailVerified: new Date(),
      },
    });

    await this.prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });

    return true;
  }
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
  async createUser(createUserInput: UserCreateInput) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: createUserInput.email,
      },
    });

    if (existingUser) {
      throw new ForbiddenException('Email already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        ...createUserInput,
      },
    });

    return user;
  }

  async sendVerificationEmail(email: string) {
    const verificationToken = await this.generateEmailVerificationToken(email);
    // Send email
    const confirmLink = `${this.domain}/auth/new-verification?token=${verificationToken}`;

    await this.resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Confirm your email',
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    });
  }

  async createAccount(createAccountInput: AccountCreateInput) {
    await this.prisma.account.create({
      data: {
        ...createAccountInput,
      },
    });
  }

  async generateJWTTokens(user: User) {
    const { accessToken, refreshToken } = await this.createToken(
      user.id,
      user.email,
      user.username,
    );
    const payload = this.jwtService.decode(accessToken);
    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user, expiresIn: payload['exp'] };
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
      const verificationToken = await this.generateEmailVerificationToken(
        user.email,
      );
      // Send email
      const confirmLink = `${this.domain}/auth/new-verification?token=${verificationToken}`;
      // confirmation email not sending
      await this.resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email,
        subject: 'Confirm your email',
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
      });

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
  // JWT Token Service
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
