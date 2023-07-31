import React from 'react';
import Button from 'react-bootstrap/Button';

const TetrisKeyboard = () => {
  function detect(){
    console.log('detect', )
  }
  return (
    <div>
      <Button onClick={detect} variant="success">{'<'}</Button>{' '}
      <Button onClick={detect} variant="warning">{'||'}</Button>{' '}
      <Button onClick={detect} variant="success">{'>'}</Button>{' '}
    </div>
  );
};

export default TetrisKeyboard;
