import { IConfig } from "./types";
import Config from './config.js';

export default class AnimationGame {
  config: IConfig
  lastRenderTime: number
  update: Function
  draw: Function

  constructor(update: Function, draw: Function) {
    this.update = update
    this.draw = draw
    this.config = new Config()
    this.animate = this.animate.bind(this)
    this.animate()
    this.lastRenderTime = 0
  }

  animate() {
    requestAnimationFrame(this.animate)
    if (++this.config.step < this.config.snakeSpeed) {
      return;
    }
    this.config.step = 0;
    this.update();
    this.draw();
  }
}