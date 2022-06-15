import { IConfig, ISnake, ISnakeObj, IScore, IApple } from "./types";
import Config from './config.js';


export default class Snake implements ISnake {
  config: IConfig
  x: number
  y: number
  dx: number
  dy: number
  maxTail: number
  tails: Array<ISnakeObj>

  constructor() {
    this.config = new Config()
    this.x = 16
    this.y = 16
    this.dx = this.config.sizeCell
    this.dy = 0
    this.maxTail = 1
    this.tails = []
  }

  update(apple: IApple, score: IScore) {
    this.x += this.dx
    this.y += this.dy
    this.tails.unshift({ x: this.x, y: this.y })
    if (this.tails.length > this.maxTail) {
      this.tails.pop()
    }

    this.tails.forEach((item, index) => {
      if (item.x === apple.x && item.y === apple.y) {
        this.maxTail++
        score.increaseScore()
        apple.randomPosition()
      }

      for (let i: number = index + 1; i < this.tails.length; i++) {
        if (item.x === this.tails[i].x && item.y === this.tails[i].y) {
          this.endGame()
          score.setToZero()
          apple.randomPosition()
        }
      }
    })
  }

  draw(context: CanvasRenderingContext2D) {
    this.tails.forEach((item, index) => {
      index === 0 ? context.fillStyle = '#91FF02' : context.fillStyle = '#66FF00'
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