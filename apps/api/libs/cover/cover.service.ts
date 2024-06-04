import { Injectable } from '@nestjs/common';
import { Cover, CoverCreateInput, SIZE } from '../../src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { Prisma } from '@prisma/client';
import { ImageLinks } from 'libs/user-book/types';

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

  async createMany(data: CoverCreateInput[]): Promise<Cover[]> {
    if (!data || data.length === 0) {
      return [];
    }

    try {
      // Step 1: Create covers using createMany
      await this.prisma.cover.createMany({
        data: data.map((cover) => ({
          url: cover.url,
          size: cover.size,
        })),
        skipDuplicates: true,
      });
    } catch (error) {
      console.error('Error during createMany covers');
    }

    // Step 2: Query the data after the create
    const covers = await this.prisma.cover.findMany({
      where: {
        OR: data.map((cover) => ({
          url: cover.url,
        })),
      },
    });

    return covers;
  }

  createCoverInput(imageLinks: ImageLinks) {
    const coverInput: CoverCreateInput[] = [];

    if (imageLinks.small) {
      coverInput.push({
        url: imageLinks.small,
        size: SIZE.SMALL,
      });
    }

    if (imageLinks.medium) {
      coverInput.push({
        url: imageLinks.medium,
        size: SIZE.MEDIUM,
      });
    }

    if (imageLinks.large) {
      coverInput.push({
        url: imageLinks.large,
        size: SIZE.LARGE,
      });
    }

    return coverInput;
  }
}
