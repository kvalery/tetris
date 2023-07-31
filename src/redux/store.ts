import { combineReducers, createStore, } from 'redux';
import { actionReducer } from './redusers/actionReducer';
import { gameReducer } from './redusers/gameReducer';

const rootReducer = combineReducers(  {
  game: gameReducer,
  action: actionReducer
})

/** стор приложения */
export const store = createStore(gameReducer)
// export const store = createStore(rootReducer)


