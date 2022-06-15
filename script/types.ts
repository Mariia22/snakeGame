export interface ICanvas {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export interface IScore {
  scoreBlock: HTMLDivElement;
  score: number;
}

export interface IConfig {
  sizeCell: number
  sizeApple: number
}

export interface IApple {
  x: number
  y: number
  draw(context: CanvasRenderingContext2D): void
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
  tails: Array<ISnakeObj>
  draw(context: CanvasRenderingContext2D): void
  update(): void
}