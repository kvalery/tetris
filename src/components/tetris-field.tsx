import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import TetrisKeyboard from './tetris-keyboard';

const TetrisField = (props: any) => {

  const [model, setModel] = useState(props.model);

  function addItem(){
    let newModel = model;
    (newModel[2])[0] = !((newModel[2])[0]);

    // newModel2[0] = newModel2[0].map(( item ) => {return !item})

    console.log('', model)
    setModel([...newModel])
  }

  return (
      <Container >

        <Row className="justify-content-center">

            <Col  md={{ span: 3, offset: 1 }}>
              <div className={'tetris-field'}>
                {model.map((item: [], index:number)  => {
                  return <div key={index} className={'tetris-row'}>
                  {item.map( (point: boolean) =>{
                    return  <div className={
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
            <TetrisKeyboard/>
          </Col>
        </Row>

        <Button onClick={addItem} variant="primary">Primary</Button>{' '}

      </Container>

  );
};

export default TetrisField;
