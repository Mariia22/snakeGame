import Config from './config.js';
export default class Snake {
    constructor() {
        this.config = new Config();
        this.x = 20;
        this.y = 20;
        this.dx = this.config.sizeCell;
        this.dy = 0;
        this.tails = [];
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.tails.unshift({ x: this.x, y: this.y });
        //this.tails.pop()
    }
    draw(context) {
        this.tails.forEach(item => {
            context.fillStyle = '#66FF00';
            context.fillRect(item.x, item.y, this.config.sizeCell, this.config.sizeCell);
        });
    }
    endGame() {
        this.x = 20;
        this.y = 20;
        this.dx = this.config.sizeCell;
        this.dy = 0;
        this.tails = [];
    }
}
