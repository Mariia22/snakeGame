export interface ICanvas {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export interface IScore {
  scoreBlock: HTMLDivElement;
  score: number;
}