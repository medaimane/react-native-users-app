import {User} from '../models/User';

export class ApiClient {
  private static readonly users: User[] = [
    {
      name: 'Alex',
      age: 20,
    },
    {
      name: 'Peter',
      age: 25,
    },
    {
      name: 'Frank',
      age: 27,
    },
  ];

  static async fetchUsers(): Promise<User[]> {
    return Promise.resolve(ApiClient.users);
  }
}
