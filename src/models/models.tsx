import { IFieldItemModel, IFieldModel, IFigureModel } from '../Interfase/gameInterface.interface';
import { randomBoolean, randomFigure, randomFigurePosition, uuidv4 } from '../utils/app-utils';
import { Figure, FigurePosition } from '../types/game-types';

/** дефолтная модель ячейки */
export function itemModel(): IFieldItemModel {
  return {
    id: uuidv4(),
    fieldValue: randomBoolean()
  }
}

/** модель для начала игры */
export function getNewModel(rows: number = 20 , columns: number = 10): IFieldModel {
  // модель поля
  let model = []
  // формируем строки
  for ( let i = 0; i < rows; i++ ) {
    const modelRow = []
    for ( let j = 0; j < columns; j++ ) {
      const newItem = itemModel()
      // формируем начальную позицию, нижние строки поля
      if (i < 15) {
        newItem['fieldValue'] = false;
      }
      modelRow.push( newItem )
    }
    model.push(modelRow)
  }

  return {
    field: model,
    figure: getNewFigure()
  }
}

/** получение новой фигуры
 * фигура появляеться всегда по центру
 * */
export function getNewFigure(): IFigureModel {
  return {
    type: randomFigure(),
    figurePosition: randomFigurePosition(),
    figureCoordinates: {
      column: 5,
      line: 18
    },
  }
}

/** модель для конца игры */
export function getModelEnd(rows: number = 20 , columns: number = 10): IFieldModel {
  let model = []
  // формируем строки
  for ( let i = 0; i < rows; i++ ) {
    const modelRow = []
    for ( let j = 0; j < columns; j++ ) {
      const newItem = itemModel()
      // формируем начальную позицию, нижние строки поля
      newItem['fieldValue'] = true;
      modelRow.push( newItem )
    }
    model.push(modelRow)
  }
  return {
    field: model,
  }
}


