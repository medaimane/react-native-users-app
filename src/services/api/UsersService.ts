import {from, Observable} from 'rxjs';
import {User} from '../models/User';
import {ApiClient} from './ApiClient';
import {UsersGateway} from './UsersGateway';

export class UsersService implements UsersGateway {
  fetchUsers(): Observable<User[]> {
    return from(ApiClient.fetchUsers());
  }
}
