import { IFieldItemModel, IFieldModel, IFigureModel } from '../Interfase/gameInterface.interface';
import { randomBoolean, uuidv4 } from './app-utils';

/** дефолтная модель ячейки */
export function itemModel(fieldValue: boolean = false): IFieldItemModel {
  return {
    id: uuidv4(),
    fieldValue: fieldValue
  }
}

/** модель для начала игры */
export function getBlankFieldModel(value: boolean = false, rows: number = 20 , columns: number = 10): IFieldItemModel[][] {
  // модель поля
  let model = []
  // формируем строки
  for ( let i = 0; i < rows; i++ ) {
    const modelRow = []
    for ( let j = 0; j < columns; j++ ) {
      modelRow.push( itemModel(value) )
    }
    model.push(modelRow)
  }
  return model
}

/** устанавливаем случайное значение с переданной линии*/
export function randomRows(model:IFieldItemModel[][], lineIndex: number = 0): IFieldItemModel[][]{

  return model.map( (row, index) => {
    if ( index > 15 ) {
      return  row.map( item => {
          item.fieldValue = randomBoolean()
          return item
        }
      )
    } else {
      return row
    }
  })

}

/** склеиваем матрицы поля и марицы поля с фигурой */
export function figureToFieldMap(field: IFieldItemModel[][], figure: IFigureModel): IFieldItemModel[][]{

   const figureToFieldModel = figure.figureField.map( (line, lineIndex) => {

     return line.map(( columnItem, columnIndex) => {
       return {
         id: uuidv4(),
         fieldValue: (!!columnItem.fieldValue)? true: field[lineIndex][columnIndex].fieldValue,
     }
    })

  })

  return figureToFieldModel;
}
