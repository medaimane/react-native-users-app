import {Storage} from '../../src/services/storage/Storage';

export class StorageImplStub implements Storage {
  getItem = jest.fn();
  setItem = jest.fn();
}
