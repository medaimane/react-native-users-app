import {map, Observable, of, switchMap} from 'rxjs';
import {UserJSON} from '../api/models/UserJSON';
import {UsersGateway} from '../api/UsersGateway';
import {UsersStorage} from '../storage/UsersStorage';
import {OfflineUsers} from './OfflineUsers';
import {Timer} from './Timer';

export const EnableNetworkDelay = 3600000;
export class OfflineUsersService implements OfflineUsers {
  constructor(
    private readonly gateway: UsersGateway,
    private readonly storage: UsersStorage,
    private readonly timer: Timer,
  ) {}

  start(): void {
    console.log('[START]');

    this.timer.start(EnableNetworkDelay);
  }

  fetchUsers(): Observable<UserJSON[]> {
    if (this.timer.isUseNetwork()) {
      this.timer.disableNetwork();

      return this.fetchAndStoresUsers();
    }

    return this.getStoredUsers();
  }

  private getStoredUsers(): Observable<UserJSON[]> {
    return this.storage.getUsers().pipe(
      switchMap(storedUsers => {
        console.log('[Offline] Users: ', storedUsers);

        if (!storedUsers) {
          return this.fetchAndStoresUsers();
        }

        return of(storedUsers);
      }),
    );
  }

  private fetchAndStoresUsers(): Observable<UserJSON[]> {
    return this.gateway.fetchUsers().pipe(
      switchMap(users => {
        console.log('[Online] Users: ', users);

        return this.storage.storeUsers(users).pipe(map(() => users));
      }),
    );
  }
}
