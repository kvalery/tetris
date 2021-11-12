import { GAME_EVENT_END, GAME_EVENT_NEXT, GAME_EVENT_START, GAME_EVENT_TIC } from '../types/types';
import { createStore } from 'redux';
import nextId from "react-id-generator";

export interface State {
  modelData: ModelDataInterface[][],
  them: string
}

export interface ModelDataInterface {
  index: string | number,
  value: boolean
}

function getInitialState(lines: number, blocks: number ): State {

  let newModelData: any = [];

  for ( let i = 0; i < lines; i++ ) {
    // генерим новую строку из блоков
    let newLine = [];
    for ( let j = 0; j < blocks; j++ ) {
      newLine.push(
        {
          index: nextId(),
          value: false
        }
      )
    }
    // добовляем новую строку в модель
    newModelData[i] = newLine;
  }

  return {
    modelData: newModelData,
    them: 'dark'
  }

}

function getStartState(lines: number, blocks: number ): State {

  let newModelData: any = [];

  for ( let i = 0; i < lines; i++ ) {
    // генерим новую строку из блоков
    let newLine = [];
    for ( let j = 0; j < blocks; j++ ) {
      newLine.push(
        {
          index: nextId(),
          value: false
        }
      )
    }
    // добовляем новую строку в модель
    newModelData[i] = newLine;
  }

  //
  newModelData[3][3].value = true;
  newModelData[4][3].value = true;
  newModelData[5][3].value = true;
  newModelData[5][4].value = true;

  return {
    modelData: newModelData,
    them: 'dark'
  }

}

export function gameReducer(state = getInitialState(15, 10), action: any) {

    console.log( 'state, action', state, action)

    switch ( action.type ) {

        case GAME_EVENT_START:
            return {...getStartState(15, 10)}

        case GAME_EVENT_TIC:
            return {...state}

        case GAME_EVENT_NEXT:
            return {...state}

        case GAME_EVENT_TIC:
            return {...state}

        case GAME_EVENT_END:
            return {...state}

        default:
            return state
    }
    return state
}

export type gameState = ReturnType<typeof gameReducer>
