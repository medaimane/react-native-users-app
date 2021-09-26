import {Timer} from './Timer';

export class TimerImpl implements Timer {
  private useNetwork: boolean;
  private timerHandler?: number;

  constructor() {
    this.useNetwork = true;
  }

  start(timeout: number): void {
    this.timerHandler = setInterval(
      () => (this.useNetwork = true),
      timeout,
    ) as any;
  }

  stop(): void {
    if (this.timerHandler) {
      clearInterval(this.timerHandler);
      this.timerHandler = undefined;
    }
  }

  isUseNetwork(): boolean {
    return this.useNetwork;
  }

  disableNetwork(): void {
    this.useNetwork = false;
  }
}
