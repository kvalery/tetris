import { applyMiddleware, combineReducers, createStore, } from 'redux';
import { userActionReducer } from './redusers/actionReducer';
import { gameReducer } from './redusers/gameReducer';

/** обьединяем редьюссеры */
const rootReducer = combineReducers(  {
  game: gameReducer,
  userActionReducer: userActionReducer
})


/** ???
 * нужно переписать с configureStore
 * как это сделать?
 * */

/** иницыализацыя стора приложения*/
export const store = createStore(rootReducer)



