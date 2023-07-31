import { GAME_ADD, GAME_START } from '../actions/gameActions';

/**
 *
 * */
const defaultGameState = {
 gameData: 0
}

/** редюссер игры все что связанно с управлением игрой и игровым тиком */
export function gameReducer(state = defaultGameState, action: {type: any}){

  console.log('----action.type',  action.type, state )
  console.log('action.type === GAME_ADD', action.type.type === 'GAME_ADD')


  if (action.type === GAME_START){
    console.log('GAME_START')
    return defaultGameState
  }

  if (action.type === 'GAME_ADD'){
    console.log('GAME_ADD - ', state)
    return { ...state, gameData: state.gameData + 1 }
  }
  return state
}
