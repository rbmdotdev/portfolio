import { Injectable } from '@nestjs/common';
import { JobType } from './job-type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JobTypesService {
  constructor(
    @InjectRepository(JobType)
    private jobTypesR: Repository<JobType>,
  ) {}

  getAllJobTypes(): Promise<JobType[]> {
    return this.jobTypesR.find();
  }
}
