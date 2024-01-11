/** список Игровых констант и их наначение */

/** GAME_START - событие старт игры  */
export const GAME_START = 'GAME_START'
/** GAME_START - событие конца игры */
export const GAME_AND = 'GAME_AND'

/** ActionCreator
 * @see GAME_START */
export function gameStart(){
  return {
    type: GAME_START
  }
}
/** ActionCreator
 * @see GAME_AND
 * */
export function gameAnd(payload: any){
  return {
    type: GAME_AND,
    payload
  }
}
