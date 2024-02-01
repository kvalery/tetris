import { IFieldItemModel, IFieldModel, IFigureModel } from '../Interfase/gameInterface.interface';
import { randomBoolean, randomFigure, randomFigurePosition } from '../utils/app-utils';
import { figureToFieldMap, getBlankFieldModel, randomRows } from '../utils/model-utils';
import { Figure, FigurePosition } from '../types/game-types';

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
   // debugger;

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
      figureField: getBlankFieldModel(),
    },
    coordinatesLine,
    coordinatesColumn
  ) as IFigureModel

  // модель данных для отрисовки
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
      figureField: getBlankFieldModel(),
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

/** попытка подвинуть в лево */
export function tryModelDown(model: any): IFieldModel{
  const field = [...model.field]
  // debugger;

  const coordinatesLine = model.figure.figureCoordinates.line + 1
  const coordinatesColumn = model.figure.figureCoordinates.column

  // инициализируем модель фигуры
  const figure = defineFigureToModelField({
      type: model.figure.type,
      figurePosition: model.figure.figurePosition,
      figureCoordinates: {
        column: coordinatesColumn,
        line: coordinatesLine
      },
      figureField: getBlankFieldModel(),
    },
    coordinatesLine,
    coordinatesColumn
  ) as IFigureModel

  // модель данных для отрисовки
  const fieldForeVue = figureToFieldMap(field, figure)

  return {
    field: field,
    figure: figure,
    fieldForeVue: fieldForeVue
  }
}

/** попытка подвинуть в лево */
export function tryModelRevers(model: any): IFieldModel{
  const field = [...model.field]

  const coordinatesLine = model.figure.figureCoordinates.line
  const coordinatesColumn = model.figure.figureCoordinates.column

  const newFigurePosition = ( model.figure.figurePosition < 3 )? model.figure.figurePosition + 1 : 0

  // определение модели фигуры
  const figure = defineFigureToModelField({
      type: model.figure.type,
      figurePosition: newFigurePosition,
      figureCoordinates: {
        column: coordinatesColumn,
        line: coordinatesLine
      },
      figureField: getBlankFieldModel(),
    },
    coordinatesLine,
    coordinatesColumn
  ) as IFigureModel

  // модель данных для отрисовки
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
      type: 4,
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
      // учитываем разворот фигуры, позицию
      if (model.figurePosition === FigurePosition.First){
        model.figureField[newLine][newColumn - 1].fieldValue = true
        model.figureField[newLine - 1][newColumn - 1].fieldValue = true
        model.figureField[newLine - 1][newColumn ].fieldValue = true
        model.figureField[newLine - 1][newColumn + 1].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Second){
        model.figureField[newLine][newColumn ].fieldValue = true
        model.figureField[newLine - 1][newColumn ].fieldValue = true
        model.figureField[newLine - 2][newColumn ].fieldValue = true
        model.figureField[newLine][newColumn  + 1].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Third){
        model.figureField[newLine - 2][newColumn + 1].fieldValue = true
        model.figureField[newLine - 1][newColumn - 1].fieldValue = true
        model.figureField[newLine - 1][newColumn ].fieldValue = true
        model.figureField[newLine - 1][newColumn + 1].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Fourth){
        model.figureField[newLine][newColumn ].fieldValue = true
        model.figureField[newLine - 1][newColumn ].fieldValue = true
        model.figureField[newLine - 2][newColumn ].fieldValue = true
        model.figureField[newLine - 2][newColumn - 1].fieldValue = true
      }

      break;

    // полоса
    case Figure.I:

      // учитываем разворот фигуры, позицию
      if (model.figurePosition === FigurePosition.First){
        model.figureField[newLine][newColumn - 1].fieldValue = true
        model.figureField[newLine][newColumn ].fieldValue = true
        model.figureField[newLine][newColumn + 1].fieldValue = true
        model.figureField[newLine][newColumn + 2].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Second){
        model.figureField[newLine -2][newColumn ].fieldValue = true
        model.figureField[newLine -1][newColumn ].fieldValue = true
        model.figureField[newLine ][newColumn ].fieldValue = true
        model.figureField[newLine +1][newColumn ].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Third){
        model.figureField[newLine][newColumn - 2].fieldValue = true
        model.figureField[newLine][newColumn -1].fieldValue = true
        model.figureField[newLine][newColumn ].fieldValue = true
        model.figureField[newLine][newColumn + 1].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Fourth){
        model.figureField[newLine -2][newColumn -1].fieldValue = true
        model.figureField[newLine -1][newColumn -1].fieldValue = true
        model.figureField[newLine ][newColumn -1].fieldValue = true
        model.figureField[newLine +1][newColumn -1].fieldValue = true
      }

      break;
    //  квадрат
    case Figure.O:

      // для этой фигуры все позиции совпадают
      model.figureField[newLine][newColumn].fieldValue = true
      model.figureField[newLine - 1][newColumn ].fieldValue = true
      model.figureField[newLine][newColumn + 1].fieldValue = true
      model.figureField[newLine - 1][newColumn + 1].fieldValue = true

      break;
    // фигура, L
    case Figure.L:

      // учитываем разворот фигуры, позицию
      if (model.figurePosition === FigurePosition.First){
        model.figureField[newLine -1][newColumn -1].fieldValue = true
        model.figureField[newLine -1][newColumn ].fieldValue = true
        model.figureField[newLine -1][newColumn + 1].fieldValue = true
        model.figureField[newLine - 2][newColumn -1].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Second){
        model.figureField[newLine ][newColumn -1].fieldValue = true
        model.figureField[newLine ][newColumn ].fieldValue = true
        model.figureField[newLine -1][newColumn ].fieldValue = true
        model.figureField[newLine -2][newColumn ].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Third){
        model.figureField[newLine -1][newColumn + 1].fieldValue = true
        model.figureField[newLine -1][newColumn ].fieldValue = true
        model.figureField[newLine -1][newColumn - 1 ].fieldValue = true
        model.figureField[newLine ][newColumn + 1 ].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Fourth){
        model.figureField[newLine - 2][newColumn +1].fieldValue = true
        model.figureField[newLine ][newColumn ].fieldValue = true
        model.figureField[newLine -1][newColumn ].fieldValue = true
        model.figureField[newLine -2][newColumn ].fieldValue = true
      }

      break;
    // фигура линия с выступом в середине
    case Figure.T:
      // учитываем разворот фигуры, позицию
      if (model.figurePosition === FigurePosition.First){
        model.figureField[newLine ][newColumn ].fieldValue = true
        model.figureField[newLine ][newColumn + 1].fieldValue = true
        model.figureField[newLine ][newColumn + 2].fieldValue = true
        model.figureField[newLine - 1][newColumn + 1].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Second){

      }
      if (model.figurePosition === FigurePosition.Third){

      }
      if (model.figurePosition === FigurePosition.Fourth){

      }

      break;

    case Figure.Z:

      // учитываем разворот фигуры, позицию
      // для этой фигуры некоторые позиции совпадают
      if (model.figurePosition === FigurePosition.First){
        model.figureField[newLine - 1][newColumn -1].fieldValue = true
        model.figureField[newLine - 1][newColumn ].fieldValue = true
        model.figureField[newLine ][newColumn ].fieldValue = true
        model.figureField[newLine ][newColumn + 1].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Second){
        model.figureField[newLine - 1][newColumn ].fieldValue = true

        model.figureField[newLine ][newColumn ].fieldValue = true



      }
      if (model.figurePosition === FigurePosition.Third){

      }
      if (model.figurePosition === FigurePosition.Fourth){

      }


      break;

    case Figure.S:
      // учитываем разворот фигуры, позицию
      // для этой фигуры некоторые позиции совпадают
      if (model.figurePosition === FigurePosition.First){
        model.figureField[newLine - 1][newColumn + 1].fieldValue = true
        model.figureField[newLine - 1][newColumn + 2].fieldValue = true
        model.figureField[newLine ][newColumn ].fieldValue = true
        model.figureField[newLine ][newColumn + 1].fieldValue = true
      }
      if (model.figurePosition === FigurePosition.Second){

      }
      if (model.figurePosition === FigurePosition.Third){

      }
      if (model.figurePosition === FigurePosition.Fourth){

      }

      break;
  }

  if(!!canUpdate){
    return model
  } else {
    return null
  }


}







