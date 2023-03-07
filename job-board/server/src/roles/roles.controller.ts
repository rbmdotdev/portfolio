import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesS: RolesService) {}

  @Get()
  findAll() {
    return this.rolesS.getAllRoles();
  }
}
