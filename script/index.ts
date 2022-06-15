import Canvas from './canvas.js';
import { ICanvas, IScore, IApple } from "./types";
import Score from './score.js';
import Apple from './apple.js';

class Game {
  canvas: ICanvas
  score: IScore
  apple: IApple

  constructor(container: Element) {
    this.canvas = new Canvas(container);
    this.score = new Score('.board__score__count', 0)
    this.apple = new Apple(this.canvas)
  }
  draw() {
    this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height)
    this.apple.draw(this.canvas.context)
  }
}
let wrapper = document.querySelector('.board__canvas');
if (!wrapper) {
  throw new Error('Failed to get container');
}
new Game(wrapper)