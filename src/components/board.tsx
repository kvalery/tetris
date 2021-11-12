import React, { useEffect, useState } from 'react';
import ControlsBlock from './controls-block';
import TableBoard from './table-board';
import { KeyActon } from '../enums/enums';

const BoardComponent = (props: any) => {

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    console.log('=========')
    window.addEventListener('keydown', onKeydownHandler);
  },[]);

  function handleTest(e: any) {
    console.log(e)
    console.log(e.charCode)
    if (e.charCode == 13) {
      alert('Enter... (KeyPress, use charCode)');
    }
    if (e.keyCode == 13) {
      alert('Enter... (KeyDown, use keyCode)');
    }
  }

  function componentDidMount() {
    console.log('dddd====')
    window.addEventListener('keydown', onKeydownHandler);
  }

  function componentWillUnmount() {
    window.removeEventListener('keydown', onKeydownHandler);
  }

  function onKeydownHandler(event: any) {
    // стрелка в лево
    if (event.keyCode === 37) {
      console.log(KeyActon.Left)
    }
    // стрелка в право
    if (event.keyCode === 39) {
      console.log(KeyActon.Right)
    }
    // стрелка в низ
    if (event.keyCode === 40) {
      console.log(KeyActon.Down)
    }
    // стрелка в в верх
    if (event.keyCode === 38) {
      console.log(KeyActon.Revers)
    }
  }

  return (
    <div>
      <TableBoard game={ props.game }>
      </TableBoard>
      <ControlsBlock></ControlsBlock>
    </div>
  );

};

export default BoardComponent;
