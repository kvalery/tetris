import { IFieldItemModel, IFieldModel, IFigureModel } from '../Interfase/gameInterface.interface';
import { randomBoolean, randomFigure, randomFigurePosition } from '../utils/app-utils';
import { figureToFieldMap, getBlankFieldModel, randomRows } from '../utils/model-utils';

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

/** получение новой фигуры
 * фигура появляеться всегда по центру
 * */
export function newFigure(): IFigureModel {

  const type = randomFigure();
  const figurePosition = randomFigurePosition();
  const figureCoordinates = { column: 4, line: 3 };

  // модель поля c фигурой
  const figureField = getBlankFieldModel();

  return defineFigureToModelField({
      type: type,
      figurePosition: figurePosition,
      figureCoordinates: figureCoordinates,
      figureField: figureField,
    }
   )
}

/** определить фигуру в поле по координатам  */
export function defineFigureToModelField(figureModel: IFigureModel): IFigureModel {
  const model = figureModel;
  const line = figureModel.figureCoordinates?.line || 0;
  const column = model.figureCoordinates?.column || 0;

  model.figureField[line][column].fieldValue = true;

  console.log('', model.figureField[line][column].fieldValue)
  console.log('', model)
  return model
}





/** добовление фигуры в модель
 * @return  model - модель
 * status - true удалось обратотать можно продолжить игру
 * */
export function addFigureToModel( model: IFieldItemModel[][], figure: IFigureModel): { model: IFieldItemModel[][], status: boolean } {
  // начальное значение ответа
  const result = {
    model: model,
    status: true
  }

  return result
}





