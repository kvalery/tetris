import React from 'react';
import Button from 'react-bootstrap/Button';

const TetrisKeyboard = () => {
  return (
    <div>


      <Button variant="success">{'<'}</Button>{' '}
      <Button variant="warning">{'||'}</Button>{' '}
      <Button variant="success">{'>'}</Button>{' '}

    </div>
  );
};

export default TetrisKeyboard;
