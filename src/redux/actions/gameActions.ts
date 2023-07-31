/** список Игровых констант и их наначение */

/** GAME_START - событие старт игры  */
export const GAME_START = 'GAME_START'
export const GAME_ADD = 'GAME_ADD'
export function gameStart(){
  return {
    type: GAME_START
  }
}
export function gameAdd(){
  return {
    type: GAME_ADD
  }
}
