import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      entity: {
        id: 1,
      },
      username: 'john',
      password: 'changeme',
      isAdmin: true,
    },
    {
      entity: {
        id: 2,
      },
      username: 'maria',
      password: 'guess',
      isAdmin: false,
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
