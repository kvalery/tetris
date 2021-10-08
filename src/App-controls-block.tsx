import React from 'react';
import AppTableBoard from './App-table-board';
import { KeyActon } from './enums/enums';

class AppControlsBlock extends React.Component {

    clikTest(data: KeyActon){
        console.log(KeyActon[data])
    }

    render() {
        return (
            <div className='App-controls-block' >
                <button onClick={() => this.clikTest(KeyActon.Left)}>{'<'}</button>

                <button onClick={() => this.clikTest(KeyActon.Revers)}>{'()'}</button>

                <button onClick={() => this.clikTest(KeyActon.Down)}>{'|'}</button>

                <button onClick={() => this.clikTest(KeyActon.Right)}>{'>'}</button>
            </div>
        )
    }

}
export default AppControlsBlock;
