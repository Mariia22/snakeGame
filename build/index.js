import Canvas from './canvas.js';
class Game {
    constructor(container) {
        this.canvas = new Canvas(container);
    }
    draw() {
        this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height);
    }
}
let wrapper = document.querySelector('.board__canvas');
if (!wrapper) {
    throw new Error('Failed to get container');
}
new Game(wrapper);
console.log('ff');
