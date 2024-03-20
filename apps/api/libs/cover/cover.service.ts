import { Injectable } from '@nestjs/common';
import { CoverCreateInput } from '../../src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class CoverService {
  constructor(private readonly prisma: PrismaRepository) {}

  async create(data: CoverCreateInput) {
    let cover = await this.prisma.cover.findFirst({
      where: {
        url: data.url,
      },
    });

    if (!cover) {
      const createCoverArgs: Prisma.CoverCreateArgs = {
        data: {
          ...data,
        },
      };

      cover = await this.prisma.cover.create(createCoverArgs);
    }
    return cover;
  }

  async createCovers(data: CoverCreateInput[]) {
    const covers = await Promise.all(data.map((cover) => this.create(cover)));
    return covers;
  }

  createCoverInput(imageLinks: any) {
    const coverInput: CoverCreateInput[] = [];

    if (imageLinks.small) {
      coverInput.push({
        url: imageLinks.small,
        size: 'SMALL',
      });
    }

    if (imageLinks.medium) {
      coverInput.push({
        url: imageLinks.medium,
        size: 'MEDIUM',
      });
    }

    if (imageLinks.large) {
      coverInput.push({
        url: imageLinks.large,
        size: 'LARGE',
      });
    }

    return coverInput;
  }
}
