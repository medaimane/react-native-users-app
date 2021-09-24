import {Observable} from 'rxjs';
import {User} from '../models/User';

export interface UsersGateway {
  fetchUsers(): Observable<User[]>;
}
