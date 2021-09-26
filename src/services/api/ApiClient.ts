import {UserJSON} from './models/UserJSON';

export class ApiClient {
  private static readonly users: UserJSON[] = [
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

  static async fetchUsers(): Promise<UserJSON[]> {
    return Promise.resolve(ApiClient.users);
  }
}
