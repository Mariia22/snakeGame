import Config from './config.js';
export default class Snake {
    constructor() {
        this.config = new Config();
        this.x = 16;
        this.y = 16;
        this.dx = this.config.sizeCell;
        this.dy = 0;
        this.maxTail = 1;
        this.tails = [];
    }
    update(apple, score) {
        this.x += this.dx;
        this.y += this.dy;
        this.tails.unshift({ x: this.x, y: this.y });
        if (this.tails.length > this.maxTail) {
            this.tails.pop();
        }
        this.tails.forEach((item, index) => {
            if (item.x === apple.x && item.y === apple.y) {
                this.maxTail++;
                score.increaseScore();
                apple.randomPosition();
            }
            for (let i = index + 1; i < this.tails.length; i++) {
                if (item.x === this.tails[i].x && item.y === this.tails[i].y) {
                    this.endGame();
                    score.setToZero();
                    apple.randomPosition();
                }
            }
        });
    }
    draw(context) {
        this.tails.forEach((item, index) => {
            index === 0 ? context.fillStyle = '#91FF02' : context.fillStyle = '#66FF00';
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
