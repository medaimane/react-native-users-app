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
  refresh: actionCreator('Refresh'),

  sortByNameAsc: actionCreator('SORT_BY_NAME_ASC'),
  sortByAgeAsc: actionCreator('SORT_BY_AGE_ASC'),
};
