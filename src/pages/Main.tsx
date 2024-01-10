import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getNewModel } from '../models/models';
import TetrisField from '../components/tetris-field';

function Maine(){

  const model: [[boolean]] = getNewModel()
  console.log('компонент Maine, модель игры', model)

  return (
    <Container>
      <Row>
        <Col>
          <TetrisField
            model={model}
          />
        </Col>
      </Row>
    </Container>
  )
};

export default Maine;
