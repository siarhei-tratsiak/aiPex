export interface IAwake {
  awake(): void
}

export interface IUpdate {
  update(isTimeToStartNewCycle: boolean): void
}
