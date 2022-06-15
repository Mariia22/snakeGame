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