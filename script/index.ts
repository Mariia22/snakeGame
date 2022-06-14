import Canvas from './canvas.js';
import { ICanvas } from "./types";

class Game {
  canvas: ICanvas

  constructor(container: Element) {
    this.canvas = new Canvas(container);
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
console.log('ff');