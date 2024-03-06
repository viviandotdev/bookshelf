import { Injectable } from '@nestjs/common';
import { AuthorCreateInput } from '../../src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaRepository) {}

  async create(data: AuthorCreateInput) {
    let author = await this.prisma.author.findFirst({
      where: {
        name: data.name,
      },
    });

    if (!author) {
      const createAuthorArgs: Prisma.AuthorCreateArgs = {
        data: {
          ...data,
        },
      };

      author = await this.prisma.author.create(createAuthorArgs);
    }
    return author;
  }

  async createAuthors(data: string[]) {
    const authors = await Promise.all(
      data.map((author) => this.create({ name: author })),
    );
    return authors;
  }
}
