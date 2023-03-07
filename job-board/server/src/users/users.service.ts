import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userR: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userR.find();
  }

  async findOne(username: string): Promise<User | null> {
    return this.userR.findOne({ where: { username } });
  }
}
