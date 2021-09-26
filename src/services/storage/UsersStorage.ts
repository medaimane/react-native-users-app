import {Observable} from 'rxjs';
import {UserJSON} from '../api/models/UserJSON';

export interface UsersStorage {
  getUsers(): Observable<UserJSON[]>;
  storeUsers(users: UserJSON[]): Observable<void>;
}
