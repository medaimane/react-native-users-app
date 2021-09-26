import {UsersStorage} from '../../src/services/storage/UsersStorage';

export class UsersStorageStub implements UsersStorage {
  getUsers = jest.fn();
  storeUsers = jest.fn();
}
