import {
    GAME_EVENT_END, GAME_EVENT_NEXT,
    GAME_EVENT_START,
    GAME_EVENT_TIC,
    USER_ACTION_DOWN,
    USER_ACTION_LEFT,
    USER_ACTION_REVERS,
    USER_ACTION_RIGHT
} from '../types/types';

export function userActionDown() {
    return {
        type: USER_ACTION_DOWN
    }
}

export function userActionLeft() {
    return {
        type: USER_ACTION_LEFT
    }
}

export function userActionRight() {
    return {
        type: USER_ACTION_RIGHT
    }
}

export function userActionRevers() {
    return {
        type: USER_ACTION_REVERS
    }
}

export function gameEventStart() {
    return {
        type: GAME_EVENT_START
    }
}

export function gameEventTic() {
    return {
        type: GAME_EVENT_TIC
    }
}

export function gameEventEnd() {
    return {
        type: GAME_EVENT_END
    }
}

export function gameEventNext() {
    return {
        type: GAME_EVENT_NEXT
    }
}
