import {HomeActions} from '../src/screens/HomeScreen/HomeActions';
import {
  homeReducer,
  HomeState,
  initialHomeState,
} from '../src/screens/HomeScreen/homeReducer';
import {User} from '../src/services/models/User';
import {ViewState} from '../src/services/view/ViewState';
import {UsersStub} from './testDoubles/UsersStubs';

describe('homeReducer', () => {
  const sut = homeReducer;

  describe('when FETCH_USERS_SUCCESS action received', () => {
    it('sets users to the received payload', () => {
      const state: HomeState = {
        ...initialHomeState,
        users: [],
      };
      const action = HomeActions.fetchUsers.success(UsersStub);

      const newState = sut(state, action);

      expect(newState.users).toEqual(UsersStub);
    });

    it('sets viewState to Empty if users array is empty, otherwise sets it to Data', () => {
      const cases: [User[], ViewState][] = [
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
});

function stateWithViewState(viewState: ViewState): HomeState {
  return {
    ...initialHomeState,
    viewState,
  };
}
