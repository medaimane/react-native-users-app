import {UsersGateway} from '../../src/services/api/UsersGateway';

export class UsersServiceStub implements UsersGateway {
  fetchUsers = jest.fn();
}
