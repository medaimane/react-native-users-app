import {UsersService} from '../services/api/UsersService';
import {OfflineUsers} from '../services/offline/OfflineUsers';
import {OfflineUsersService} from '../services/offline/OfflineUsersService';
import {TimerImpl} from '../services/offline/TimerImpl';
import {StorageImpl} from '../services/storage/StorageImpl';
import {UsersStorageImpl} from '../services/storage/UsersStorageImpl';

export interface Dependencies {
  usersService: OfflineUsers;
}

const usersGateway = new UsersService();

const storage = new StorageImpl();
const usersStorage = new UsersStorageImpl(storage);

export const dependencies: Dependencies = {
  usersService: new OfflineUsersService(
    usersGateway,
    usersStorage,
    new TimerImpl(),
  ),
};
