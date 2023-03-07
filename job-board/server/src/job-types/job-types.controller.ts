import { Controller, Get } from '@nestjs/common';
import { JobTypesService } from './job-types.service';

@Controller('job-types')
export class JobTypesController {
  constructor(private jobTypesS: JobTypesService) {}

  @Get()
  findAll() {
    return this.jobTypesS.getAllJobTypes();
  }
}
