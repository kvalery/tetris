import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getNewModel } from '../models/models';
import TetrisField from '../components/tetris-field';
import { useDispatch, useSelector } from 'react-redux';
import { gameAnd, gameStart } from '../store/actions/gameActions';
import { IFieldItemModel, IFieldModel } from '../Interfase/gameInterface.interface';

function Maine(){

  /** ???
   * useDispatch() обьявляеться в каждом компоненте?
   * как удобнее с ним работать, выносить или наследовать?
   * */
  const dispatch = useDispatch();

  /** ???
   * у меня есть простые компоненты в которые я передаю пропсы и они просто отрисоывают данные
   * в компонентах сложных я могу использовать конструкцию store = useSelector((state) => { return state })
   * и получать весь слепок стора?
   * просто всегда делать это? например наследуясь от базового класса который этот функцыонал предоставляет?
   *  */

  /** получение стора */
  const store = useSelector((state) => {
    return state
  })

  /** получение игровой модели */
  const gameModel: IFieldModel = useSelector((state) => {
    /** ???
     * хочу использовать такое передачу пропсов
     * <TetrisField model={store.game.gameModel}/>
     * валит ошибка типа
     * какой тип нужен для этого
     * и вообще как принято типизировать стор стейт итд...
     * */
    console.log('state', state )
    // @ts-ignore
    return state.game.gameModel })

  /** событие старта игры */
  const startGame = () => {
    dispatch(gameStart())
  }

  /** событие окончания игры */
  const endGame = () => {
    dispatch(gameAnd(gameModel))
  }

  /** событие управление игрой */
  const eventGameAction = (keyboardActionType: string) => {
    if (keyboardActionType === 'left' ) {
      console.log('L',)
    }
    if (keyboardActionType === 'right') {
      console.log('R',)
    }
    if (keyboardActionType === 'down') {
      console.log('D',)
    }

  }

  return (
    <Container>
      <Row>
        <Col>
          <TetrisField
            model={ gameModel.fieldForeVue }
            eventGameAction = {eventGameAction}
            endGameAction={endGame}
            startGameAction={startGame}
          />
        </Col>
      </Row>
    </Container>
  )
};

export default Maine;
