import {combineEpics, ofType} from 'redux-observable';
import {catchError, map, mapTo, of, switchMap, tap} from 'rxjs';
import {EpicType} from '../../store/EpicType';
import {HomeActions, HomeViewActions} from './HomeActions';

const start: EpicType = (action$, _state$, {usersService}) =>
  action$.pipe(
    ofType(HomeViewActions.start.type),
    tap(() => usersService.start()),
    mapTo(HomeActions.fetchUsers.request()),
  );

const refresh: EpicType = (action$, _state$) =>
  action$.pipe(
    ofType(HomeViewActions.refresh.type),
    mapTo(HomeActions.fetchUsers.request()),
  );

const fetchImages: EpicType = (action$, _state$, {usersService}) =>
  action$.pipe(
    ofType(HomeActions.fetchUsers.request.type),
    switchMap(() =>
      usersService.fetchUsers().pipe(
        map(HomeActions.fetchUsers.success),
        catchError(() => of(HomeActions.fetchUsers.failure())),
      ),
    ),
  );

export const homeEpics = combineEpics(start, refresh, fetchImages);
