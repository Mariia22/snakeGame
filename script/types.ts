export interface ICanvas {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export interface IScore {
  scoreBlock: HTMLDivElement;
  score: number;
  increaseScore(): void
  setToZero(): void
}

export interface IConfig {
  sizeCell: number
  sizeApple: number
  step: number
  snakeSpeed: number
}

export interface IApple {
  x: number
  y: number
  draw(context: CanvasRenderingContext2D): void
  randomPosition(): void
}

export interface ISnakeObj {
  x: number
  y: number
}

export interface ISnake {
  x: number
  y: number
  dx: number
  dy: number
  maxTail: number
  tails: Array<ISnakeObj>
  draw(context: CanvasRenderingContext2D): void
  update(apple: IApple, score: IScore): void
}