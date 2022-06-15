import { IConfig } from "./types";

export default class Config implements IConfig {
  sizeCell: number
  sizeApple: number
  constructor() {
    this.sizeCell = 20;
    this.sizeApple = this.sizeCell / 4;
  }
}