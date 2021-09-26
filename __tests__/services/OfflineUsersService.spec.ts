import {of} from 'rxjs';
import {OfflineUsers} from '../../src/services/offline/OfflineUsers';
import {OfflineUsersService} from '../../src/services/offline/OfflineUsersService';
import {TimerStub} from '../testDoubles/TimerStub';
import {UsersServiceStub} from '../testDoubles/UsersServiceStub';
import {UsersStorageStub} from '../testDoubles/UsersStorageStub';
import {UsersStub} from '../testDoubles/UsersStubs';

describe('OfflineUsersService', () => {
  let sut: OfflineUsers;

  let usersStogare: UsersStorageStub;
  let usersService: UsersServiceStub;
  let timer: TimerStub;

  beforeEach(() => {
    usersStogare = new UsersStorageStub();
    usersStogare.getUsers.mockReturnValue(of(void 0));
    usersStogare.storeUsers.mockReturnValue(of(void 0));

    usersService = new UsersServiceStub();
    usersService.fetchUsers.mockReturnValue(of(void 0));

    timer = new TimerStub();

    sut = new OfflineUsersService(usersService, usersStogare, timer);
  });

  describe('start', () => {
    it('calls timer start with one hour delay as params', () => {
      sut.start();

      expect(timer.start).toBeCalledWith(3600000);
    });
  });

  describe('fetchUsers', () => {
    describe('when fetsh from network is disable', () => {
      beforeEach(() => {
        timer.isUseNetwork.mockReturnValue(false);
      });

      describe('when there is no users data stored', () => {
        it('fetches users data using the gateway', () => {
          usersStogare.getUsers.mockReturnValue(of(null));

          sut.fetchUsers().subscribe();

          expect(usersService.fetchUsers).toBeCalled();
        });

        describe('when data is fetched', () => {
          beforeEach(() => {
            usersStogare.getUsers.mockReturnValue(of(null));
            usersService.fetchUsers.mockReturnValue(of(UsersStub));
          });

          it('stores it locally', () => {
            sut.fetchUsers().subscribe();

            expect(usersStogare.storeUsers).toBeCalledWith(UsersStub);
          });

          it('returns fetched data', () => {
            const next = jest.fn();

            sut.fetchUsers().subscribe(next);

            expect(next).toBeCalledWith(UsersStub);
          });
        });
      });

      describe('when there is users data stored', () => {
        beforeEach(() => {
          usersStogare.getUsers.mockReturnValue(of(UsersStub));
        });

        it('does not call the gatway', () => {
          sut.fetchUsers().subscribe();

          expect(usersService.fetchUsers).not.toBeCalled();
          expect(usersStogare.storeUsers).not.toBeCalled();
        });

        it('returns stored data', () => {
          const next = jest.fn();

          sut.fetchUsers().subscribe(next);

          expect(next).toBeCalledWith(UsersStub);
        });
      });
    });
  });

  describe('when fetsh from network is enable', () => {
    beforeEach(() => {
      timer.isUseNetwork.mockReturnValue(true);
    });

    it('fetches users data using the gateway', () => {
      usersStogare.getUsers.mockReturnValue(of(null));

      sut.fetchUsers().subscribe();

      expect(usersService.fetchUsers).toBeCalled();
    });

    describe('when data is fetched', () => {
      beforeEach(() => {
        usersStogare.getUsers.mockReturnValue(of(null));
        usersService.fetchUsers.mockReturnValue(of(UsersStub));
      });

      it('stores it locally', () => {
        sut.fetchUsers().subscribe();

        expect(usersStogare.storeUsers).toBeCalledWith(UsersStub);
      });

      it('returns fetched data', () => {
        const next = jest.fn();

        sut.fetchUsers().subscribe(next);

        expect(next).toBeCalledWith(UsersStub);
      });
    });
  });
});
