import {User} from '../../services/models/User';
import {ViewState} from '../../services/view/ViewState';
import {Action} from '../../store/Action';
import {HomeActions, HomeViewActions} from './HomeActions';

export interface HomeState {
  viewState: ViewState;
  users: User[];
}

export const initialHomeState: HomeState = {
  viewState: ViewState.Loading,
  users: [],
};

export function homeReducer(
  state: HomeState = initialHomeState,
  action: Action,
): HomeState {
  switch (action.type) {
    case HomeViewActions.refresh.type: {
      return {
        ...state,
        viewState: ViewState.Loading,
      };
    }

    case HomeActions.fetchUsers.success.type: {
      const users: User[] = action.payload;

      return {
        ...state,
        viewState: users.length === 0 ? ViewState.Empty : ViewState.Data,
        users,
      };
    }

    case HomeActions.fetchUsers.failure.type: {
      return {
        ...state,
        viewState: ViewState.Error,
      };
    }

    case HomeViewActions.sortByNameAsc.type: {
      return {
        ...state,
        users: sortUsersByNameAsc(state.users),
      };
    }

    case HomeViewActions.sortByAgeAsc.type: {
      return {
        ...state,
        users: sortUsersByAgeAsc(state.users),
      };
    }

    default: {
      return state;
    }
  }
}

function sortUsersByNameAsc(users: User[]): User[] {
  return users.sort((u, v) =>
    u.name.toLowerCase().localeCompare(v.name.toLowerCase()),
  );
}

function sortUsersByAgeAsc(users: User[]): User[] {
  return users.sort((u, v) => {
    if (u.age === v.age) {
      return 0;
    }

    return u.age > v.age ? 1 : -1;
  });
}
