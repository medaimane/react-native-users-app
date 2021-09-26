import {StateObservable} from 'redux-observable';
import {of, throwError} from 'rxjs';
import {
  HomeActions,
  HomeViewActions,
} from '../src/screens/HomeScreen/HomeActions';
import {homeEpics} from '../src/screens/HomeScreen/homeEpics';
import {EpicType} from '../src/store/EpicType';
import {RootState} from '../src/store/rootState';
import {expectedAction} from './testDoubles/expectedAction';
import {TestAssembly} from './testDoubles/TestAssembly';
import {UsersStub} from './testDoubles/UsersStubs';

describe('homeEpics', () => {
  let sut: EpicType;
  let dependencies: TestAssembly;
  let state$: StateObservable<RootState>;

  beforeEach(() => {
    dependencies = new TestAssembly();
    dependencies.usersService.fetchUsers.mockReturnValue(of(void 0));
    dependencies.usersService.start.mockReturnValue(void 0);

    sut = homeEpics;
  });

  describe('when START action received', () => {
    const action$ = of(HomeViewActions.start());

    it('calls user service start', () => {
      sut(action$, state$, dependencies).subscribe();

      expect(dependencies.usersService.start).toBeCalled();
    });

    it('emits FEETCH_USERS_REQUEST action', () => {
      const next = jest.fn();

      sut(action$, state$, dependencies).subscribe(next);

      expect(next).toBeCalledWith(
        expectedAction(HomeActions.fetchUsers.request.type),
      );
    });
  });

  describe('when REFRESH action received', () => {
    it('emits FEETCH_USERS_REQUEST action', () => {
      const next = jest.fn();
      const action$ = of(HomeViewActions.refresh());

      sut(action$, state$, dependencies).subscribe(next);

      expect(next).toBeCalledWith(
        expectedAction(HomeActions.fetchUsers.request.type),
      );
    });
  });

  describe('when FEETCH_USERS_REQUEST action received', () => {
    const action$ = of(HomeActions.fetchUsers.request());

    it('calls fetchUsers from gateway', () => {
      const next = jest.fn();

      sut(action$, state$, dependencies).subscribe(next);

      expect(dependencies.usersService.fetchUsers).toBeCalled();
    });

    describe('when call successed', () => {
      it('emits FEETCH_USERS_SUCCESS action with the list of users as payload', () => {
        const next = jest.fn();
        dependencies.usersService.fetchUsers.mockReturnValue(of(UsersStub));

        sut(action$, state$, dependencies).subscribe(next);

        expect(next).toBeCalledWith(
          expectedAction(HomeActions.fetchUsers.success.type, UsersStub),
        );
      });
    });

    describe('when call failed', () => {
      it('emits FEETCH_USERS_FAILURE action', () => {
        const next = jest.fn();
        dependencies.usersService.fetchUsers.mockReturnValue(
          throwError(() => new Error('any error')),
        );

        sut(action$, state$, dependencies).subscribe(next);

        expect(next).toBeCalledWith(
          expectedAction(HomeActions.fetchUsers.failure.type),
        );
      });
    });
  });
});
