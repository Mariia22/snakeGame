export default class Canvas {
    constructor(container) {
        this.element = document.createElement('canvas');
        this.element.width = 320;
        this.element.height = 320;
        let res = this.element.getContext('2d');
        if (!res) {
            throw new Error('Failed to get 2D context');
        }
        this.context = res;
        container.appendChild(this.element);
    }
}
