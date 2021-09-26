import {of} from 'rxjs';
import {UsersStorage} from '../../src/services/storage/UsersStorage';
import {UsersStorageImpl} from '../../src/services/storage/UsersStorageImpl';
import {StorageImplStub} from '../testDoubles/StorageStub';
import {UsersStub} from '../testDoubles/UsersStubs';

describe('UsersStorageImpl', () => {
  let sut: UsersStorage;

  let storage: StorageImplStub;

  beforeEach(() => {
    storage = new StorageImplStub();
    storage.getItem.mockReturnValue(of(void 0));
    storage.setItem.mockReturnValue(of(void 0));

    sut = new UsersStorageImpl(storage);
  });

  describe('getUsers', () => {
    it('calls storage getItem with the key as params', () => {
      sut.getUsers().subscribe();

      expect(storage.getItem).toBeCalledWith('Users');
    });

    describe('when there is stored data', () => {
      it('parses and returns it', () => {
        const next = jest.fn();
        storage.getItem.mockReturnValue(of(storedDataStub()));

        sut.getUsers().subscribe(next);

        expect(next).toBeCalledWith(UsersStub);
      });
    });

    describe('when nothing stored yet', () => {
      it('returns null', () => {
        const next = jest.fn();
        storage.getItem.mockReturnValue(of(null));

        sut.getUsers().subscribe(next);

        expect(next).toBeCalledWith(null);
      });
    });
  });

  describe('storeUsers', () => {
    it('calls storage setItem with the key and users data as params', () => {
      sut.storeUsers(UsersStub).subscribe();

      expect(storage.setItem).toBeCalledWith('Users', storedDataStub());
    });
  });
});

const storedDataStub = () => JSON.stringify(UsersStub);
