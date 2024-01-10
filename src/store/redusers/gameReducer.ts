import { GAME_ADD, GAME_START } from '../actions/gameActions';

/**
 *
 * */
const defaultGameState = {
 gameData: 110
}

/** редюссер игры все что связанно с управлением игрой и игровым тиком */
export const gameReducer = (state = defaultGameState, action: {type: any}) => {

  console.log('gameReducer, action.type',  action.type, 'state', state )

  if (action.type === GAME_START){
    return defaultGameState
  }

  if (action.type === 'GAME_ADD'){
    return { ...state, gameData: state.gameData + 1 }
  }
  return state
}
