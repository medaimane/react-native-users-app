import {UsersGateway} from '../services/api/UsersGateway';
import {UsersService} from '../services/api/UsersService';
import {OfflineUsersService} from '../services/offline/OfflineUsersService';
import {StorageImpl} from '../services/storage/StorageImpl';
import {UsersStorageImpl} from '../services/storage/UsersStorageImpl';

export interface Dependencies {
  usersGateway: UsersGateway;
}

const usersGateway = new UsersService();

const storage = new StorageImpl();
const usersStorage = new UsersStorageImpl(storage);

export const dependencies: Dependencies = {
  usersGateway: new OfflineUsersService(usersGateway, usersStorage),
};
