/** список констант и описание действия */

export const ACTION = 'ACTION'
export const ACTION_GET_JSON = 'ACTION_GET_JSON'

export function action(payload: any){
  return {
      type: ACTION,
      payload
    }
}
export function actionGetJson(payload: any){
  return {
      type: ACTION_GET_JSON,
      payload
    }
}
