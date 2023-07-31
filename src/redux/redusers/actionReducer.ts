import { ACTION } from '../actions/actions';

export function actionReducer(state = { value: 0 }, action: {type: any}){
  if (action.type === ACTION){
    return { value: state.value + 1 }
  }
  return state
}
