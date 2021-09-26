import {OfflineUsers} from '../../src/services/offline/OfflineUsers';

export class UsersServiceStub implements OfflineUsers {
  start = jest.fn();
  fetchUsers = jest.fn();
}
