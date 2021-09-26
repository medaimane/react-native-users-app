import {
  HomeActions,
  HomeViewActions,
} from '../src/screens/HomeScreen/HomeActions';
import {
  homeReducer,
  HomeState,
  initialHomeState,
} from '../src/screens/HomeScreen/homeReducer';
import {UserJSON} from '../src/services/api/models/UserJSON';
import {ViewState} from '../src/store/ViewState';
import {UsersStub, UserStub} from './testDoubles/UsersStubs';

describe('homeReducer', () => {
  const sut = homeReducer;

  describe('when FETCH_USERS_SUCCESS action received', () => {
    it('sets users to the received payload', () => {
      const state = stateWithUsers([]);
      const action = HomeActions.fetchUsers.success(UsersStub);

      const newState = sut(state, action);

      expect(newState.users).toEqual(UsersStub);
    });

    it('sets viewState to Empty if users array is empty, otherwise sets it to Data', () => {
      const cases: [UserJSON[], ViewState][] = [
        [[], ViewState.Empty],
        [UsersStub, ViewState.Data],
      ];

      cases.forEach(([users, viewState]) => {
        const state = stateWithViewState(ViewState.Loading);
        const action = HomeActions.fetchUsers.success(users);

        const newState = sut(state, action);

        expect(newState.viewState).toEqual(viewState);
      });
    });
  });

  describe('when FETCH_USERS_FAILURE action is received', () => {
    it('sets viewState to Error', () => {
      const state = stateWithViewState(ViewState.Loading);
      const action = HomeActions.fetchUsers.failure();

      const newState = sut(state, action);

      expect(newState.viewState).toEqual(ViewState.Error);
    });
  });

  describe('when SORT_BY_NAME_ASC action is received', () => {
    it('sorts users asc', () => {
      const state = stateWithUsers([
        {
          ...UserStub,
          name: 'Cruz',
        },
        {
          ...UserStub,
          name: 'adam',
        },
      ]);
      const action = HomeViewActions.sortByNameAsc();

      const newState = sut(state, action);

      expect(newState.users).toEqual([
        {
          ...UserStub,
          name: 'adam',
        },
        {
          ...UserStub,
          name: 'Cruz',
        },
      ]);
    });
  });

  describe('when SORT_BY_AGE_ASC action is received', () => {
    it('sorts users asc', () => {
      const state = stateWithUsers([
        {
          ...UserStub,
          age: 47,
        },
        {
          ...UserStub,
          age: 33,
        },
      ]);
      const action = HomeViewActions.sortByAgeAsc();

      const newState = sut(state, action);

      expect(newState.users).toEqual([
        {
          ...UserStub,
          age: 33,
        },
        {
          ...UserStub,
          age: 47,
        },
      ]);
    });
  });
});

function stateWithViewState(viewState: ViewState): HomeState {
  return {
    ...initialHomeState,
    viewState,
  };
}

function stateWithUsers(users: UserJSON[]): HomeState {
  return {
    ...initialHomeState,
    users,
  };
}
