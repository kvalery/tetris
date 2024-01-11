import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getNewModel } from '../models/models';
import TetrisField from '../components/tetris-field';
import { useDispatch, useSelector } from 'react-redux';
import { gameAnd } from '../store/actions/gameActions';

function Maine(){

  const dispatch = useDispatch();

  /** ???
   * у меня есть простые компоненты в которые я передаю пропсы и они просто отрисоывают данные
   * в компонентах сложных я могу использовать конструкцию выше и получать весь слепок стора?
   * просто всегда делать это? например наследуясь от базового класса который этот функцыонал предоставляет?
   *  */

  /** получение стора */
  const store = useSelector((state) => {
    return state
  })

  /** получение игровой модели */
  const gameModel: [[boolean]]  = useSelector((state) => {
    /** ???
     * хочу использовать такое передачу пропсов
     * <TetrisField model={store.game.gameModel}/>
     * валит ошибка типа
     * какой тип нужен для этого
     * и вообще как принято типизировать стор стейт итд...
     * */
    // @ts-ignore
    return state.game.gameModel })

  /** событие окончания игры */
  const endGame = () => {
    dispatch(gameAnd(gameModel))
  }

  return (
    <Container>
      <Row>
        <Col>
          <TetrisField
            model={gameModel}
            endGameAction={endGame}
          />
        </Col>
      </Row>
    </Container>
  )
};

export default Maine;
