import {UsersGateway} from '../services/api/UsersGateway';
import {UsersService} from '../services/api/UsersService';

export interface Dependencies {
  usersGateway: UsersGateway;
}

export const dependencies: Dependencies = {
  usersGateway: new UsersService(),
};
