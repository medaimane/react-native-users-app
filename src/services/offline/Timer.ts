export interface Timer {
  start(timeout: number): void;
  stop(): void;

  isUseNetwork(): boolean;
  disableNetwork(): void;
}
