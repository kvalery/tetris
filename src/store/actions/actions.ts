
/** список констант и описание действия пользователя */
export const ACTION = 'ACTION'

/** ACTION_LEFT - событие в лево */
export const ACTION_LEFT = 'ACTION_LEFT'
/** ACTION_RIGHT - событие в право */
export const ACTION_RIGHT = 'ACTION_RIGHT'
/** ACTION_LEFT_REVERS - развернуть фигуру на лево */
export const ACTION_LEFT_REVERS = 'ACTION_LEFT_REVERS'
/** ACTION_RIGHT_REVERS - развернуть фигуру на право */
export const ACTION_RIGHT_REVERS = 'ACTION_RIGHT_REVERS'
/** ACTION_DOWN - опустить фигуру */
export const ACTION_DOWN = 'ACTION_DOWN'

/** ActionCreator  */
export function action(payload: any){
  return {
      type: ACTION,
      payload
    }
}

