import {Observable} from 'rxjs';
import {UserJSON} from './models/UserJSON';

export interface UsersGateway {
  fetchUsers(): Observable<UserJSON[]>;
}
