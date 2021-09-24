import {Dependencies} from '../../src/dependencies/Dependencies';
import {UsersServiceStub} from './UsersServiceStub';

export class TestAssembly implements Dependencies {
  usersGateway: UsersServiceStub;

  constructor() {
    this.usersGateway = new UsersServiceStub();
  }
}
