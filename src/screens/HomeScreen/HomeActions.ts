import {User} from '../../services/models/User';
import {actionCreatorFactory} from '../../store/ActionCreatorFactory';

const actionCreator = actionCreatorFactory('Home');

export const HomeActions = {
  fetchUsers: {
    request: actionCreator('FETCH_USERS_REQUEST'),
    success: actionCreator<User[]>('FETCH_USERS_SUCCESS'),
    failure: actionCreator('FETCH_USERS_FAILURE'),
  },
};

export const HomeViewActions = {
  start: actionCreator('START'),
};
