import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'tienstephenks@gmail.com',
      password: '12345678',
    },
    {
      userId: 2,
      username: 'manhtientran@gmail.com',
      password: '12345678',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
