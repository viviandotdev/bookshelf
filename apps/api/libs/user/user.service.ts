import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { UserCreateInput } from 'src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
    constructor(
        private readonly repository: UserRepository,
        private readonly prisma: PrismaRepository,
    ) { }
    findUnique = this.repository.findUnique;
    update = this.repository.update;

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

    async updateUserEmail(email: string, newEmail: string) {
        const existingUser = await this.findUnique({
            where: {
                email,
            },
        });
        if (!existingUser) {
            throw new NotFoundException('User does not exist');
        }
        const verifiedUser = await this.update({
            where: {
                email,
            },
            data: {
                email: newEmail,
                emailVerified: new Date(),
            },
        });
        return verifiedUser;
    }
}
