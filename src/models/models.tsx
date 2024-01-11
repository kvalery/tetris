/** модель для начала игры */
export function getNewModel(rows: number = 20 , columns: number = 10): [[boolean]] {
  // формируем колонку
  const modelColumns = (Array(columns)).fill(false);
  return (Array(rows)).fill(modelColumns) as [[boolean]];
}

/** модель для конца игры */
export function getModelEnd(rows: number = 20 , columns: number = 10): [[boolean]] {
  // формируем колонку
  const modelColumns = (Array(columns)).fill(true);
  return (Array(rows)).fill(modelColumns) as [[boolean]];
}

/** заполнение поля рандомными значениями */
export function prepareField(): [[boolean]] {
  return [[false]]
}


