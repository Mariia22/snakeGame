import Canvas from './canvas.js';
import { ICanvas, IScore, IApple, ISnake } from "./types";
import Score from './score.js';
import Apple from './apple.js';
import Snake from './snake.js';
import AnimationGame from './animation.js';

class Game {
  canvas: ICanvas
  score: IScore
  apple: IApple
  snake: ISnake

  constructor(container: Element) {
    this.canvas = new Canvas(container);
    this.score = new Score('.board__score__count', 0)
    this.apple = new Apple(this.canvas)
    this.snake = new Snake()
    new AnimationGame(this.update.bind(this), this.draw.bind(this));
  }

  draw() {
    this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height)
    this.apple.draw(this.canvas.context)
    this.snake.draw(this.canvas.context)
  }

  update() {
    this.snake.update()
  }
}
let wrapper = document.querySelector('.board__canvas');
if (!wrapper) {
  throw new Error('Failed to get container');
}
new Game(wrapper)