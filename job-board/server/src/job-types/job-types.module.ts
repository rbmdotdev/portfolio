import { Module } from '@nestjs/common';
import { JobTypesController } from './job-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobType } from './job-type.entity';
import { JobTypesService } from './job-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([JobType])],
  providers: [JobTypesService],
  exports: [JobTypesService],
  controllers: [JobTypesController],
})
export class JobTypesModule {}
