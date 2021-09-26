import {map, Observable} from 'rxjs';
import {UserJSON} from '../api/models/UserJSON';
import {Storage} from './Storage';
import {UsersStorage} from './UsersStorage';

const UsersKey = 'Users';

export class UsersStorageImpl implements UsersStorage {
  constructor(private readonly storage: Storage) {}

  storeUsers(users: UserJSON[]): Observable<void> {
    return this.storage.setItem(UsersKey, JSON.stringify(users));
  }

  getUsers(): Observable<UserJSON[]> {
    return this.storage.getItem(UsersKey).pipe(
      map(users => {
        if (users) {
          return JSON.parse(users);
        }

        return users;
      }),
    );
  }
}
