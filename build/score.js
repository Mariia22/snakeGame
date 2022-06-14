export default class Score {
    constructor(selector, score = 0) {
        if (!selector) {
            throw new Error('Failed to get selector for score block');
        }
        else {
            this.scoreBlock = document.querySelector(selector);
        }
        this.score = score;
        this.draw();
    }
    increaseScore() {
        this.score++;
        this.draw();
    }
    setToZero() {
        this.score = 0;
        this.draw();
    }
    draw() {
        this.scoreBlock.innerHTML = this.score.toString();
    }
}
