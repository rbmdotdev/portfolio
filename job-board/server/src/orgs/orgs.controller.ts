import { Controller, Get } from '@nestjs/common';
import { OrgsService } from './orgs.service';

@Controller('orgs')
export class OrgsController {
  constructor(private orgS: OrgsService) {}

  @Get()
  findAll() {
    return this.orgS.getAllOrgs();
  }
}
