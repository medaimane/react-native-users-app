import {combineEpics, ofType} from 'redux-observable';
import {catchError, map, mapTo, of, switchMap} from 'rxjs';
import {EpicType} from '../../store/EpicType';
import {HomeActions, HomeViewActions} from './HomeActions';

const start: EpicType = action$ =>
  action$.pipe(
    ofType(HomeViewActions.start.type, HomeViewActions.refresh.type),
    mapTo(HomeActions.fetchUsers.request()),
  );

const fetchImages: EpicType = (action$, _state$, {usersGateway}) =>
  action$.pipe(
    ofType(HomeActions.fetchUsers.request.type),
    switchMap(() =>
      usersGateway.fetchUsers().pipe(
        // delay(2000), // used to simulate the loading view state
        map(HomeActions.fetchUsers.success),
        catchError(() => of(HomeActions.fetchUsers.failure())),
      ),
    ),
  );

export const homeEpics = combineEpics(start, fetchImages);
