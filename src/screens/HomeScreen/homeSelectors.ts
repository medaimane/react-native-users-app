import {Local} from '../../localization/local';
import {UserJSON} from '../../services/api/models/UserJSON';
import {ViewState} from '../../store/ViewState';
import {HomeState} from './homeReducer';

export interface UserPresentable {
  avatar: string;
  age: string;
  name: string;
}

export interface HomeViewState {
  viewState: ViewState;
  usersPresentable: UserPresentable[];
}

export function getViewState(state: HomeState): HomeViewState {
  return {
    viewState: state.viewState,
    usersPresentable: state.users.map(makeUserPresentable),
  };
}

function makeUserPresentable(u: UserJSON): UserPresentable {
  return {
    avatar: u.name[0].toUpperCase(),
    age: `${u.age} ${Local.yearsOld}`,
    name: u.name.toUpperCase(),
  };
}
