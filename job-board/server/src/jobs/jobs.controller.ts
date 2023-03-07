import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobS: JobsService) {}

  @Get()
  findAll() {
    return this.jobS.getAllJobs();
  }
}
