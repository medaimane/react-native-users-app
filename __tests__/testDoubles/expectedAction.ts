import {Action} from '../../src/store/Action';

export function expectedAction<T>(type: string, payload?: T): Action {
  return {
    type,
    payload,
  };
}
