import { IFieldItemModel, IFieldModel, IFigureModel } from '../Interfase/gameInterface.interface';
import { randomBoolean, randomFigure, randomFigurePosition } from '../utils/app-utils';
import { figureToFieldMap, getBlankFieldModel, randomRows } from '../utils/model-utils';
import { Figure } from '../types/game-types';

/** модель для начала игры */
export function getNewModel(rows: number = 20 , columns: number = 10): IFieldModel {
  // модель поля
  let field = getBlankFieldModel()

  // формируем строки рандомного выбора
  field = randomRows(field, 15)

  // инициализируем модель фигуры
  const figure = newFigure()

  const fieldForeVue = figureToFieldMap(field, figure)

  return {
    field: field,
    figure: figure,
    fieldForeVue: fieldForeVue
  }
}

/** модель для конца игры */
export function getModelEnd(rows: number = 20 , columns: number = 10): IFieldModel {
  return {
    fieldForeVue: getBlankFieldModel(true)
  }
}

/** попытка подвинуть в лево */
export function tryModelLeft(model: any): IFieldModel{
  const field = [...model.field]

  const coordinatesLine = model.figure.figureCoordinates.line
  const coordinatesColumn = model.figure.figureCoordinates.column - 1

  // инициализируем модель фигуры
  const figure = defineFigureToModelField({
      type: model.figure.type,
      figurePosition: model.figure.figurePosition,
      figureCoordinates: {
        column: coordinatesColumn,
        line: coordinatesLine
      },
      figureField: [...model.figure.figureField],
    },
    coordinatesLine,
    coordinatesColumn
  ) as IFigureModel

  const fieldForeVue = figureToFieldMap(field, figure)

  return {
    field: field,
    figure: figure,
    fieldForeVue: fieldForeVue
  }
}

/** попытка подвинуть в право */
export function tryModelRight(model: any): IFieldModel{
  const field = [...model.field]

  const coordinatesLine = model.figure.figureCoordinates.line
  const coordinatesColumn = model.figure.figureCoordinates.column + 1

  // инициализируем модель фигуры
  const figure = defineFigureToModelField({
      type: model.figure.type,
      figurePosition: model.figure.figurePosition,
      figureCoordinates: {
        column: coordinatesColumn,
        line: coordinatesLine
      },
      figureField: [...model.figure.figureField],
    },
    coordinatesLine,
    coordinatesColumn
  ) as IFigureModel

  const fieldForeVue = figureToFieldMap(field, figure)

  return {
    field: field,
    figure: figure,
    fieldForeVue: fieldForeVue
  }
}


/** получение новой фигуры
 * фигура появляеться всегда по центру
 * */
export function newFigure(): IFigureModel {

  // случайный выбор фигуры
  const type = randomFigure();
  // случайный выбор положения фигуры в пространстве
  const figurePosition = randomFigurePosition();

  // координаты где появляется фигура
  const figureCoordinates = { column: 4, line: 3 };

  // модель поля с фигурой
  const figureField = getBlankFieldModel();

  // возращаем матрицу поля с фигурой, всегда
  return defineFigureToModelField({
      type: type,
      figurePosition: figurePosition,
      figureCoordinates: figureCoordinates,
      figureField: figureField,
    },
    figureCoordinates.line,
    figureCoordinates.column
  ) as IFigureModel
}

/** определить фигуру в поле по координатам  */
export function defineFigureToModelField( figureModel: IFigureModel, newLine: number, newColumn: number ): IFigureModel | null {

  const model = figureModel;

  // получилось ли добавить фигуру в модель по координатам или возвращаем старую модель
  let canUpdate = true;

  console.log('----------', figureModel)


  const newFigureField = model.figureField

  // исполняем инструкции согласно типу фигуры Figure
  // позиционируем фигуру относительно переданных координат
  switch (model.type) {
    // фигура, отзеркаленая L
    case Figure.J:

      model.figureField[newLine][newColumn].fieldValue = true
      model.figureField[newLine - 1][newColumn ].fieldValue = true
      model.figureField[newLine - 1][newColumn + 1].fieldValue = true
      model.figureField[newLine - 1][newColumn + 2].fieldValue = true

      break;

    // полоса
    case Figure.I:
      model.figureField[newLine][newColumn].fieldValue = true
      model.figureField[newLine][newColumn + 1].fieldValue = true
      model.figureField[newLine][newColumn + 2].fieldValue = true
      model.figureField[newLine][newColumn + 3].fieldValue = true
      break;
    //  квадрат
    case Figure.O:

      model.figureField[newLine][newColumn].fieldValue = true
      model.figureField[newLine - 1][newColumn ].fieldValue = true

      model.figureField[newLine][newColumn + 1].fieldValue = true
      model.figureField[newLine - 1][newColumn + 1].fieldValue = true

      break;
    // фигура, L
    case Figure.L:

      model.figureField[newLine ][newColumn ].fieldValue = true
      model.figureField[newLine ][newColumn + 1].fieldValue = true
      model.figureField[newLine ][newColumn + 2].fieldValue = true
      model.figureField[newLine - 1][newColumn ].fieldValue = true

      break;
    // фигура линия с выступом в середине
    case Figure.T:
      model.figureField[newLine ][newColumn ].fieldValue = true
      model.figureField[newLine ][newColumn + 1].fieldValue = true
      model.figureField[newLine ][newColumn + 2].fieldValue = true
      model.figureField[newLine - 1][newColumn + 1].fieldValue = true
      break;

    case Figure.Z:

      model.figureField[newLine - 1][newColumn ].fieldValue = true
      model.figureField[newLine - 1][newColumn + 1].fieldValue = true
      model.figureField[newLine ][newColumn + 1].fieldValue = true
      model.figureField[newLine ][newColumn + 2].fieldValue = true

      break;

    case Figure.S:

      model.figureField[newLine - 1][newColumn + 1].fieldValue = true
      model.figureField[newLine - 1][newColumn + 2].fieldValue = true
      model.figureField[newLine ][newColumn ].fieldValue = true
      model.figureField[newLine ][newColumn + 1].fieldValue = true
      break;
  }

  if(!!canUpdate){
    return model
  } else {
    return null
  }


}







