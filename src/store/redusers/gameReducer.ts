import { GAME_AND, GAME_LEFT, GAME_RIGHT, GAME_START } from '../actions/gameActions';
import { getModelEnd, getNewModel, tryModelLeft, tryModelRight } from '../../models/models';

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

  /** ???
   * например я хочу один метод в нутри которого буду использовать условие
   * могули я использовать константу из редьюсера?
   * tryModel(model, GAME_LEFT)
   * */
  if (action.type === GAME_LEFT){
    return { gameModel: tryModelLeft(state.gameModel) }
  }


  if (action.type === GAME_RIGHT){
    return { gameModel: tryModelRight(state.gameModel) }
  }

  return state
}
