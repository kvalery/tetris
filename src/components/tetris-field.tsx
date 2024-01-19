import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import TetrisKeyboard from './tetris-keyboard';
import { IFieldItemModel } from '../Interfase/gameInterface.interface';

/** ???
 * props: any - не красиво
 * как определять типы для текущих и будущих пропсов,
 * с учотом того что их может быть много, среди них есть функции обратного вызова
 * и будут добавляться еще
 * */

/** непосредственно компонент поля с контроллами */
const TetrisField = (props: any) => {

  return (
      <Container >

        <Row className="justify-content-center">

            <Col  md={{ span: 3, offset: 1 }}>
              <div className={'tetris-field'}>
                {props.model.map((item: [], index:number)  => {
                  return <div key={index} className={'tetris-row'}>
                  {item.map( (fieldItem: IFieldItemModel, i:number) =>{
                    return  <div key={index.toString() + i.toString()} className={
                      'tetris-point' +
                      (!!fieldItem.fieldValue ? " tetris-point__active " : " ")
                    }></div>
                  } )}
                </div>})
                }
              </div>
            </Col>

          </Row>

        <Row className="justify-content-center">
          <Col  md={{ span: 3, offset: 1 }}>
            <TetrisKeyboard keyboardAction = { props.eventGameAction } />
          </Col>
        </Row>

        <Button onClick={props.endGameAction} variant="primary">конец</Button>{'  '}
        <Button onClick={props.startGameAction} variant="warning">старт</Button>

      </Container>
  );
};

export default TetrisField;
