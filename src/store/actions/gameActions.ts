/** список Игровых констант и их наначение */

/** GAME_START - событие старт игры  */
export const GAME_START = 'GAME_START'
/** GAME_START - событие конца игры */
export const GAME_AND = 'GAME_AND'


/** ???
 * события управления, на мой взгляд не относяться к этому списку констант,
 * как я могу работать с одной и тойде моделью из разных редьюссеров ??? */
/** GAME_START - событие конца игры */
export const GAME_LEFT = 'GAME_LEFT'
export const GAME_RIGHT = 'GAME_RIGHT'
export const GAME_DOWN = 'GAME_DOWN'

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




/** ActionCreator
 * @see GAME_LEFT
 * */
export function gameLeft(payload: any){
  return {
    type: GAME_LEFT,
    payload
  }
}

/** ActionCreator
 * @see GAME_RIGHT
 * */
export function gameRight(payload: any){
  return {
    type: GAME_RIGHT,
    payload
  }
}

/** ActionCreator
 * @see GAME_DOWN
 * */
export function gameDown(payload: any){
  return {
    type: GAME_DOWN,
    payload
  }
}
