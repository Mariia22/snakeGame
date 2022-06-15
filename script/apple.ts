import { IApple, IConfig, ICanvas } from "./types";
import Config from './config.js';
import getRandom from './scripts.js';

export default class Apple implements IApple {
  x: number
  y: number
  canvas: ICanvas
  config: IConfig

  constructor(canvas: ICanvas) {
    this.x = 0;
    this.y = 0;
    this.canvas = canvas;
    this.config = new Config();
    this.randomPosition();
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = "#A00034";
    context.arc(this.x + (this.config.sizeCell / 2), this.y + (this.config.sizeCell / 2), this.config.sizeApple, 0, 2 * Math.PI);
    context.fill();
  }

  randomPosition() {
    this.x = getRandom(0, this.canvas.element.width / this.config.sizeCell) * this.config.sizeCell;
    this.y = getRandom(0, this.canvas.element.height / this.config.sizeCell) * this.config.sizeCell;
  }

}