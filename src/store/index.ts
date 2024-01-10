import { applyMiddleware, combineReducers, createStore, } from 'redux';
import { userActionReducer } from './redusers/actionReducer';
import { gameReducer } from './redusers/gameReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers(  {
  game: gameReducer,
  userAction: userActionReducer
})

/** стор приложения */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// export const store = configureStore({reducer: rootReducer});



