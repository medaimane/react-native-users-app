import {map, Observable, of, switchMap} from 'rxjs';
import {UserJSON} from '../api/models/UserJSON';
import {UsersGateway} from '../api/UsersGateway';
import {UsersStorage} from '../storage/UsersStorage';

export class OfflineUsersService implements UsersGateway {
  constructor(
    private readonly gateway: UsersGateway,
    private readonly storage: UsersStorage,
  ) {}

  fetchUsers(): Observable<UserJSON[]> {
    return this.storage.getUsers().pipe(
      switchMap(storedUsers => {
        console.log('[Offline] users: ', storedUsers);

        if (!storedUsers) {
          return this.gateway.fetchUsers().pipe(
            switchMap(users => {
              console.log('[Online] users: ', storedUsers);

              return this.storage.storeUsers(users).pipe(map(() => users));
            }),
          );
        }

        return of(storedUsers);
      }),
    );
  }
}
