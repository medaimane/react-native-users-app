import {Dependencies} from '../../src/dependencies/Dependencies';
import {UsersServiceStub} from './UsersServiceStub';

export class TestAssembly implements Dependencies {
  usersService: UsersServiceStub;

  constructor() {
    this.usersService = new UsersServiceStub();
  }
}
