import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityResolver } from './activity.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { ActivityRepository } from './activity.respository';

@Module({
  providers: [ActivityResolver, ActivityService, ActivityRepository],
  imports: [PrismaModule],
})
export class ActivityModule {}
