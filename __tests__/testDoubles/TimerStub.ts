import {Timer} from '../../src/services/offline/Timer';

export class TimerStub implements Timer {
  start = jest.fn();
  stop = jest.fn();
  isUseNetwork = jest.fn();
  disableNetwork = jest.fn();
}
