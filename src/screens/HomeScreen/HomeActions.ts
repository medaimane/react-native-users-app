import {UserJSON} from '../../services/api/models/UserJSON';
import {actionCreatorFactory} from '../../store/ActionCreatorFactory';

const actionCreator = actionCreatorFactory('Home');

export const HomeActions = {
  fetchUsers: {
    request: actionCreator('FETCH_USERS_REQUEST'),
    success: actionCreator<UserJSON[]>('FETCH_USERS_SUCCESS'),
    failure: actionCreator('FETCH_USERS_FAILURE'),
  },
};

export const HomeViewActions = {
  start: actionCreator('START'),
  refresh: actionCreator('REFRESH'),

  sortByNameAsc: actionCreator('SORT_BY_NAME_ASC'),
  sortByAgeAsc: actionCreator('SORT_BY_AGE_ASC'),
};
