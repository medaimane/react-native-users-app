import {
  HomeState,
  initialHomeState,
} from '../src/screens/HomeScreen/homeReducer';
import {ViewState} from '../src/services/view/ViewState';
import {
  getViewState,
  UserPresentable,
} from '../src/screens/HomeScreen/homeSelectors';

describe('homeSelectors', () => {
  describe('viewState', () => {
    it('returns viewState as it is', () => {
      const state: HomeState = {
        ...initialHomeState,
        viewState: ViewState.Loading,
      };

      const viewState = getViewState(state);

      expect(viewState.viewState).toBe(ViewState.Loading);
    });
  });

  describe('usersPresentable', () => {
    it('returns mapped users presentable', () => {
      const state: HomeState = {
        ...initialHomeState,
        users: [
          {
            age: 24,
            name: 'adam',
          },
          {
            age: 22,
            name: 'cruz',
          },
        ],
      };

      const viewState = getViewState(state);

      expect<UserPresentable[]>(viewState.usersPresentable).toEqual([
        {
          age: '24 years old',
          name: 'ADAM',
          avatar: 'A',
        },
        {
          age: '22 years old',
          name: 'CRUZ',
          avatar: 'C',
        },
      ]);
    });
  });
});
