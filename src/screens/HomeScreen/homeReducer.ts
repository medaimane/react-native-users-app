import {User} from '../../services/models/User';
import {ViewState} from '../../services/view/ViewState';
import {Action} from '../../store/Action';
import {HomeActions} from './HomeActions';

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

    default: {
      return state;
    }
  }
}
