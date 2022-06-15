import Config from './config.js';
import getRandom from './scripts.js';
export default class Apple {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;
        this.config = new Config();
        this.randomPosition();
    }
    draw(context) {
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
