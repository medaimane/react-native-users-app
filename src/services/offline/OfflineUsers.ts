import {UsersGateway} from '../api/UsersGateway';

export interface OfflineUsers extends UsersGateway {
  start(): void;
}
