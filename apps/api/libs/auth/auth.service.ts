import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { hash } from 'bcryptjs';
import { PrismaRepository } from 'prisma/prisma.repository';
import { v4 as uuidv4 } from 'uuid';
import { Resend } from 'resend';
import { User } from '@prisma/client';
import { UserService } from 'libs/user/user.service';
@Injectable()
export class AuthService {
    private readonly resend = new Resend(
        this.configService.get<string>('resend.api'),
    );

    private readonly domain = this.configService.get<string>('web.url');
    constructor(
        private readonly prisma: PrismaRepository,
        private jwtService: JwtService,
        private configService: ConfigService,
        private userService: UserService,
    ) { }

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

        const verifiedToken = await this.prisma.verificationToken.delete({
            where: {
                id: existingToken.id,
            },
        });

        return verifiedToken;
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

    async resetPassword(token: string, password: string) {
        const existingToken = await this.prisma.passwordResetToken.findUnique({
            where: {
                token,
            },
        });

        if (!existingToken) {
            throw new ForbiddenException('Invalid token');
        }

        const hasExpired = existingToken.expires < new Date();

        if (hasExpired) {
            return { error: 'Token has expired!' };
        }

        const existingUser = await this.userService.findUnique({
            where: {
                email: existingToken.email,
            },
        });

        if (!existingUser) {
            throw new ForbiddenException('Email does not exist');
        }

        const hashedPassword = await hash(password, 10);
        await this.prisma.user.update({
            where: {
                id: existingUser.id,
            },
            data: {
                hashedPassword,
            },
        });

        await this.prisma.passwordResetToken.delete({
            where: {
                id: existingToken.id,
            },
        });

        return true;
    }
    async generatePasswordResetToken(email: string) {
        const token = uuidv4();
        const expires = new Date(new Date().getTime() + 3600 * 1000);

        const existingToken = await this.prisma.passwordResetToken.findUnique({
            where: {
                token,
            },
        });

        if (existingToken) {
            await this.prisma.passwordResetToken.delete({
                where: { id: existingToken.id },
            });
        }

        const passwordResetToken = await this.prisma.passwordResetToken.create({
            data: {
                email,
                token,
                expires,
            },
        });
        return passwordResetToken.token;
    };



    async sendVerificationEmailCode(email: string) {
        const verificationToken = await this.generateEmailVerificationToken(
            email,
        );

        const res = await this.resend.emails.send({
            from: 'bookshelf@vivianlin.dev',
            to: email,
            subject: 'Confirm your email',
            html: `<p>Here is your verification code ${verificationToken}</p>`,
        });
    }

    async sendPasswordResetEmail(email: string) {
        const verificationToken = await this.generatePasswordResetToken(email);

        const resetLink = `${this.domain}/auth/reset-password?token=${verificationToken}`;

        await this.resend.emails.send({
            from: 'bookshelf@vivianlin.dev',
            to: email,
            subject: 'Reset your password',
            html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
        });
    }

    async generateJWTTokens(user: User) {
        const { accessToken, refreshToken } = await this.createToken(
            user.id,
        );

        const payload = this.jwtService.decode(accessToken);
        await this.updateRefreshToken(user.id, refreshToken);

        return { accessToken, refreshToken, user, expiresIn: payload['exp'] };
    }

    async createToken(userId: string) {
        const accessToken = this.jwtService.sign(
            { userId },
            {
                secret: this.configService.get<string>('jwt.access'),
                expiresIn: this.configService.get<string>('jwt.accessExpiration'),
            },
        );
        const refreshToken = this.jwtService.sign(
            { userId, accessToken },
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
