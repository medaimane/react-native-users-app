import {from, Observable} from 'rxjs';
import {UserJSON} from './models/UserJSON';
import {ApiClient} from './ApiClient';
import {UsersGateway} from './UsersGateway';

export class UsersService implements UsersGateway {
  fetchUsers(): Observable<UserJSON[]> {
    return from(ApiClient.fetchUsers());
  }
}
