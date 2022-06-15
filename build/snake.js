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
        this.controlSnake();
    }
    update(apple, score, canvas) {
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
                    this.finish(apple, score);
                }
            }
        });
        if (this.x < 0 || this.x >= canvas.element.width || this.y < 0 || this.y >= canvas.element.height) {
            this.finish(apple, score);
        }
    }
    draw(context) {
        this.tails.forEach((item, index) => {
            index === 0 ? context.fillStyle = '#91FF02' : context.fillStyle = '#66FF00';
            context.fillRect(item.x, item.y, this.config.sizeCell, this.config.sizeCell);
        });
    }
    controlSnake() {
        document.addEventListener('keydown', (e) => {
            if (e.code === "ArrowUp") {
                this.dx = 0;
                this.dy = -this.config.sizeCell;
            }
            else if (e.code === "ArrowDown") {
                this.dx = 0;
                this.dy = this.config.sizeCell;
            }
            else if (e.code === "ArrowLeft") {
                this.dx = -this.config.sizeCell;
                this.dy = 0;
            }
            else if (e.code === "ArrowRight") {
                this.dx = this.config.sizeCell;
                this.dy = 0;
            }
        });
    }
    finish(apple, score) {
        this.endGame();
        score.setToZero();
        apple.randomPosition();
    }
    endGame() {
        this.x = 16;
        this.y = 16;
        this.dx = this.config.sizeCell;
        this.dy = 0;
        this.tails = [];
    }
}
