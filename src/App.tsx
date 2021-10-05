import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppBoard from './App-board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <AppBoard></AppBoard>
      </div>
    </div>
  );
}

export default App;
