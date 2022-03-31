import { Injectable } from '@nestjs/common';

export type User = {
  id: string;
  email: string;
  password: string;
};

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 'a', email: 'a@email.com', password: '123456' },
    { id: 'b', email: 'b@email.com', password: '123123' },
  ];

  async findUserById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
