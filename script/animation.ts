import { IConfig, IAnimation } from "./types";
import Config from './config.js';

export default class AnimationGame implements IAnimation {
  config: IConfig
  update: Function
  draw: Function
  speed: number
  gameOver: boolean

  constructor(update: Function, draw: Function) {
    this.update = update
    this.draw = draw
    this.config = new Config()
    this.speed = this.config.snakeSpeed
    this.gameOver = false
    this.animate = this.animate.bind(this)
    this.animate()
  }

  increaseSpeed() {
    this.speed = Math.floor(this.speed / 1.25)
  }

  takeOffSpeed() {
    this.speed = this.config.snakeSpeed
  }

  changeGameOver() {
    this.gameOver = true
  }

  animate() {
    if (this.gameOver) return;
    requestAnimationFrame(this.animate)

    if (++this.config.step < this.speed) {
      return;
    }
    this.config.step = 0;
    this.update();
    this.draw();
  }
}