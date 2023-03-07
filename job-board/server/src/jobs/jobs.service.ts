import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsR: Repository<Job>,
  ) {}

  getAllJobs(): Promise<Job[]> {
    return this.jobsR.find();
  }
}
