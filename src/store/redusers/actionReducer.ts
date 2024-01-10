import { ACTION, ACTION_GET_JSON } from '../actions/actions';

export const userActionReducer = (state = { value: 0 }, action: {type: any, payload: any}) => {
  if (action.type === ACTION){
    return { value: state.value + 1 }
  }
  if (action.type === ACTION_GET_JSON){
    console.log('userActionReducera', action)
    return { value: state.value + 10 }
  }
  return state
}
