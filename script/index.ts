import Canvas from './canvas.js';
import { ICanvas, IScore } from "./types";
import Score from './score.js';

class Game {
  canvas: ICanvas
  score: IScore

  constructor(container: Element) {
    this.canvas = new Canvas(container);
    this.score = new Score('.board__score__count', 0)
  }
  draw() {
    this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height)
  }
}
let wrapper = document.querySelector('.board__canvas');
if (!wrapper) {
  throw new Error('Failed to get container');
}
new Game(wrapper)