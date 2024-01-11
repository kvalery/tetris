import { ACTION } from '../actions/actions';


const defaultActionState = { value: 0 }

/** редюссер игры все что связанно с ходом игры и игровым тиком
 *  событие старт игры
 *  @see GAME_START
 *  событие конца игры
 *  @see GAME_AND
 * */

export const userActionReducer = (state = defaultActionState, action: {type: any, payload: any}) => {
  if (action.type === ACTION){
    return { value: state.value + 1 }
  }
  return state
}
