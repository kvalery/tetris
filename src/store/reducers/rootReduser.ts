import { combineReducers } from "redux";
import { gameReducer } from './gameReducer';
import { userEventReducer } from './userEventReducer';


export const rootReducer = combineReducers({
    game: gameReducer,
    user: userEventReducer,
})

export type rootState = ReturnType<typeof rootReducer>
