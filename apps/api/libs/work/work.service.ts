import { Injectable } from '@nestjs/common';
import { Author, WorkCreateInput } from '@bookcue/api/generated-db-types';
import { WorkRepository } from './work.repository';
import { PrismaRepository } from 'prisma/prisma.repository';

@Injectable()
export class WorkService {
  constructor(
    private readonly work: WorkRepository,
    private readonly prisma: PrismaRepository,
  ) {}

  async createUniqueWork(data: WorkCreateInput, authors: Author[]) {
    // Start a transaction to ensure atomicity of the operations
    const result = await this.prisma.$transaction(async (prisma) => {
      // Check if a work with the same title and first author name already exists
      const existingWork = await prisma.work.findMany({
        where: {
          title: data.title,
          AND: {
            authors: {
              some: {
                name: authors[0].name,
              },
            },
          },
        },
        include: {
          authors: true,
        },
      });

      // If the existingWork array is not empty, a work with the same title
      // and first author name already exists, and we should not proceed
      if (existingWork.length > 0) {
        return existingWork[0];
      }

      // Create a new work with the provided details
      const newWork = await prisma.work.create({
        data: {
          ...data,
        },
      });

      return newWork;
    });

    return result;
  }
}
