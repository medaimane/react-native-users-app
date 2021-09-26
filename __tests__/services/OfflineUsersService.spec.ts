import {of} from 'rxjs';
import {UsersGateway} from '../../src/services/api/UsersGateway';
import {OfflineUsersService} from '../../src/services/offline/OfflineUsersService';
import {UsersServiceStub} from '../testDoubles/UsersServiceStub';
import {UsersStorageStub} from '../testDoubles/UsersStorageStub';
import {UsersStub} from '../testDoubles/UsersStubs';

describe('OfflineUsersService', () => {
  let sut: UsersGateway;

  let usersStogare: UsersStorageStub;
  let usersGateway: UsersServiceStub;

  beforeEach(() => {
    usersStogare = new UsersStorageStub();
    usersGateway = new UsersServiceStub();

    usersStogare.getUsers.mockReturnValue(of(void 0));
    usersStogare.storeUsers.mockReturnValue(of(void 0));
    usersGateway.fetchUsers.mockReturnValue(of(void 0));

    sut = new OfflineUsersService(usersGateway, usersStogare);
  });

  describe('fetchUsers', () => {
    describe('when users data is not stored yet', () => {
      it('fetches users data using the gateway', () => {
        usersStogare.getUsers.mockReturnValue(of(null));

        sut.fetchUsers().subscribe();

        expect(usersGateway.fetchUsers).toBeCalled();
      });

      describe('when data is fetched', () => {
        beforeEach(() => {
          usersStogare.getUsers.mockReturnValue(of(null));
          usersGateway.fetchUsers.mockReturnValue(of(UsersStub));
        });

        it('stores it locally', () => {
          sut.fetchUsers().subscribe();

          expect(usersStogare.storeUsers).toBeCalledWith(UsersStub);
        });

        it('returns it', () => {
          const next = jest.fn();

          sut.fetchUsers().subscribe(next);

          expect(next).toBeCalledWith(UsersStub);
        });
      });
    });

    describe('when users data is aleary stored', () => {
      beforeEach(() => {
        usersStogare.getUsers.mockReturnValue(of(UsersStub));
      });

      it('does not call the gatway', () => {
        sut.fetchUsers().subscribe();

        expect(usersGateway.fetchUsers).not.toBeCalled();
        expect(usersStogare.storeUsers).not.toBeCalled();
      });

      it('returns it', () => {
        const next = jest.fn();

        sut.fetchUsers().subscribe(next);

        expect(next).toBeCalledWith(UsersStub);
      });
    });
  });
});
