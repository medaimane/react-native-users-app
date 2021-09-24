import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import {Dependencies, dependencies} from '../dependencies/Dependencies';
import {Action, ActionWithPayload} from './Action';
import {rootEpic} from './rootEpic';
import {rootReducer} from './rootReducer';
import {RootState} from './rootState';

export function configureStore() {
  const epicMiddleware = createEpicMiddleware<
    Action | ActionWithPayload,
    Action | ActionWithPayload,
    RootState,
    Dependencies
  >({dependencies});

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore();
