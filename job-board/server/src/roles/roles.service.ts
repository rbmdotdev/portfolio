import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleR: Repository<Role>,
  ) {}

  getAllRoles(): Promise<Role[]> {
    return this.roleR.find();
  }
}
