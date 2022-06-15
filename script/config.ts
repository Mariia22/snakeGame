import { IConfig } from "./types";

export default class Config implements IConfig {
  sizeCell: number
  sizeApple: number
  snakeSpeed: number
  step: number

  constructor() {
    this.sizeCell = 16;
    this.sizeApple = this.sizeCell / 4;
    this.snakeSpeed = 24;
    this.step = 1;
  }
}
