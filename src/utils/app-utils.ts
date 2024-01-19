/** уникальное значение  */
import { Figure, FigurePosition } from '../types/game-types';

export function uuidv4(): string {
  // @ts-ignore
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

/** рандомное булион значение */
export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

/** рандомное значение фигуры */
export function randomFigure(): Figure {
  return  Math.floor(Math.random() * 7);
}

/** рандомное значение положения фигуры фигуры */
export function randomFigurePosition(): FigurePosition {
  return  Math.floor(Math.random() * 4);
}
