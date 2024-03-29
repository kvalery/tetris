import { Figure, FigurePosition } from '../types/game-types';

/** интерфейс игрового поля */
export interface IFieldModel {
  // игровое поле
  field?: IFieldItemModel[][],
  // фигура
  figure?: IFigureModel,
  // поле дял отображения
  fieldForeVue: IFieldItemModel[][],
}

/** интерфейс для одного деления игрового поля
 * поел состоит из множества таких делений
 * */
export interface IFieldItemModel {
  // id
  id: string,
  // закрашен или пуст
  fieldValue: boolean,
  // модификатор цвета
  fieldColor?: string,
}

/** интерфейс фигуры  */
export interface IFigureModel {
  // тип фигуры
  type: Figure,
  // позиция фигуры в пространстве
  figurePosition: FigurePosition,
  // описание фигуры в пространстве игрового поля
  figureField: IFieldItemModel[][],
  // координаты
  figureCoordinates?: {
    column: number,
    line: number
  },
  // модификатор цвета
  figureColor?: string,
}


