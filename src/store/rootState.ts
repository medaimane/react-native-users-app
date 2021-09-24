import {HomeState, initialHomeState} from '../screens/HomeScreen/homeReducer';

export interface RootState {
  home: HomeState;
}

export const rootState: RootState = {
  home: initialHomeState,
};
