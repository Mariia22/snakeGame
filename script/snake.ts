import { IConfig, ISnake, ISnakeObj, IScore, IApple, ICanvas, IAnimation } from "./types";
import Config from './config.js';


export default class Snake implements ISnake {
  config: IConfig
  x: number
  y: number
  dx: number
  dy: number
  maxTail: number
  speedLimit: number
  tails: Array<ISnakeObj>

  constructor() {
    this.config = new Config()
    this.x = 16
    this.y = 16
    this.dx = this.config.sizeCell
    this.dy = 0
    this.maxTail = 1
    this.speedLimit = 5
    this.tails = []
    this.controlSnake()
  }

  update(apple: IApple, score: IScore, canvas: ICanvas, animation: IAnimation) {
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
        if (this.tails.length > 1 && this.tails.length % this.speedLimit === 0) {
          animation.increaseSpeed();
        }
      }

      for (let i: number = index + 1; i < this.tails.length; i++) {
        if (item.x === this.tails[i].x && item.y === this.tails[i].y) {
          this.finish(apple, score, animation)
        }
      }
    })

    if (this.x < 0 || this.x >= canvas.element.width || this.y < 0 || this.y >= canvas.element.height) {
      this.finish(apple, score, animation)
    }
  }

  draw(context: CanvasRenderingContext2D) {
    this.tails.forEach((item, index) => {
      index === 0 ? context.fillStyle = '#91FF02' : context.fillStyle = '#66FF00'
      context.fillRect(item.x, item.y, this.config.sizeCell, this.config.sizeCell)
    })
  }

  controlSnake() {
    document.addEventListener('keydown', (e) => {
      if (e.code === "ArrowUp") {
        this.dx = 0
        this.dy = -this.config.sizeCell
      }
      else if (e.code === "ArrowDown") {
        this.dx = 0
        this.dy = this.config.sizeCell
      }
      else if (e.code === "ArrowLeft") {
        this.dx = -this.config.sizeCell
        this.dy = 0
      }
      else if (e.code === "ArrowRight") {
        this.dx = this.config.sizeCell
        this.dy = 0
      }
    })
  }

  finish(apple: IApple, score: IScore, animation: IAnimation) {
    if (confirm("You lost. Press OK to restart")) {
      this.endGame()
      score.setToZero()
      apple.randomPosition()
      animation.takeOffSpeed()
    }
    else {
      animation.changeGameOver();
    }
  }

  endGame() {
    this.x = 16
    this.y = 16
    this.dx = this.config.sizeCell
    this.dy = 0
    this.tails = []
    this.maxTail = 1
  }

}