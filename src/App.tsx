import React, { useEffect, useState } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { useTypedSelector } from './huks/useTypedSelector';
import BoardComponent from './components/board';
import { KeyActon } from './enums/enums';
import AppButton from './components/ui /app-button';

function App() {
  const {user, game} = useTypedSelector(state => state)

  function buttonClick (){
    console.log('dsdsfd')
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={buttonClick}>
        {'reStart'}
      </button>
      <br/>
      <br/>


      <div className="App-body">
        <BoardComponent user={ user } game={ game }>
        </BoardComponent>
      </div>
    </div>
  );
}

export default App;
