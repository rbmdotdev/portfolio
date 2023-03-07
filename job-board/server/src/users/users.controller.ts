import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersS: UsersService) {}

  @Get()
  findAll() {
    return this.usersS.getAllUsers();
  }
}
