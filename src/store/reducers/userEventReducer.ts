import {
    USER_ACTION_DOWN,
    USER_ACTION_LEFT
} from '../types/types';

export function userEventReducer(state = 0, action: any) {

    if (action.type === USER_ACTION_DOWN) {
        return state
    }
    if (action.type === USER_ACTION_LEFT) {
        return state
    }
    return state
}

export type userState = ReturnType<typeof userEventReducer>

