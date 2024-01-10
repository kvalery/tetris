import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import TetrisKeyboard from './tetris-keyboard';

const TetrisField = (props: any) => {

  // const [model, setModel] = useState(props.model);

  // получение модели от родителя
  // для дальнейшей отрисовки
  const model = props.model;


  function addItem(){
    console.log('проверка квадратиков',)
    // let newModel = model;
    // (newModel[2])[0] = !((newModel[2])[0]);
    //
    // // newModel2[0] = newModel2[0].map(( item ) => {return !item})
    //
    // console.log('', model)
    // setModel([...newModel])
  }

  /** события нажатия на кнопки управления */
  const keyboardAction = ( keyboardActionType: string ) => {
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
      <Container >

        <Row className="justify-content-center">

            <Col  md={{ span: 3, offset: 1 }}>
              <div className={'tetris-field'}>
                {model.map((item: [], index:number)  => {
                  return <div key={index} className={'tetris-row'}>
                  {item.map( (point: boolean, i:number) =>{
                    return  <div key={index.toString() + i.toString()} className={
                      'tetris-point' +
                      (!!point ? " tetris-point__active " : " ")
                    }></div>
                  } )}
                </div>})
                }
              </div>
            </Col>

          </Row>

        <Row className="justify-content-center">
          <Col  md={{ span: 3, offset: 1 }}>
            <TetrisKeyboard keyboardAction = {keyboardAction} />
          </Col>
        </Row>

        {/*<Button onClick={keyboardAction} variant="primary">Primary</Button>{' ssss '}*/}

        <Button onClick={addItem} variant="primary">Primary</Button>{' '}

      </Container>
  );
};

export default TetrisField;
