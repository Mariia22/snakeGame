import { IConfig, ISnake, ISnakeObj } from "./types";
import Config from './config.js';

export default class Snake implements ISnake {
  config: IConfig
  x: number
  y: number
  dx: number
  dy: number
  tails: Array<ISnakeObj>

  constructor() {
    this.config = new Config()
    this.x = 20
    this.y = 20
    this.dx = this.config.sizeCell
    this.dy = 0
    this.tails = []
  }
  update() {
    this.x += this.dx
    this.y += this.dy
    this.tails.unshift({ x: this.x, y: this.y })
    //this.tails.pop()
  }

  draw(context: CanvasRenderingContext2D) {
    this.tails.forEach(item => {
      context.fillStyle = '#66FF00'
      context.fillRect(item.x, item.y, this.config.sizeCell, this.config.sizeCell)
    })
  }

  endGame() {
    this.x = 20
    this.y = 20
    this.dx = this.config.sizeCell
    this.dy = 0
    this.tails = []
  }
}