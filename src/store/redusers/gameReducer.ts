import { GAME_AND, GAME_START } from '../actions/gameActions';
import { getModelEnd, getNewModel } from '../../models/models';

/** игровая модель по умолчанию
 *
 * */
const defaultGameState = {
 gameModel: getNewModel()
}

/** редюссер игры все что связанно с ходом игры и игровым тиком
 *  событие старт игры
 *  @see GAME_START
 *  событие конца игры
 *  @see GAME_AND
 * */
export const gameReducer = (state = defaultGameState, action: {type: any}) => {

  if (action.type === GAME_START){
    return { gameModel: getNewModel() }
  }

  if (action.type === GAME_AND){
    return { gameModel: getModelEnd() }
  }

  return state
}
