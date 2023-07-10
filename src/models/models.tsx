

export function getNewModel(rows: number = 20 , columns: number = 10): [[boolean]] {
  // формируем колонку
  const modelColumns = (Array(columns)).fill(false);
  return (Array(rows)).fill(modelColumns) as [[boolean]];
}
