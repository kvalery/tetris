import React, { Props } from 'react';
import './App.scss';
import AppTableBoard from './App-table-board';
import AppControlsBlock from './App-controls-block';
import { checkServerIdentity } from 'tls';
import { KeyActon } from './enums/enums';

interface State {
    modelData: boolean[][]
}

class AppBoard extends React.Component< {}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            modelData: [
                [true,true,true,true,true,true,true,true,true,],
                [true,true,true,true,true,true,true,true,true,],
                [true,true,false,true,true,true,true,true,true,],
                [true,true,false,false,true,true,true,true,true,],
                [true,true,true,false,true,true,true,true,true,],
                [true,true,true,true,true,true,true,true,true,]
            ],
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeydownHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeydownHandler);
    }

    onKeydownHandler(event: any) {
        // стрелка в лево
        if(event.keyCode === 37){
            console.log(KeyActon.Left)
        }
        // стрелка в право
        if(event.keyCode === 39){
            console.log(KeyActon.Right)
        }
        // стрелка в низ
        if(event.keyCode === 40){
            console.log(KeyActon.Down)
        }
        // стрелка в в верх
        if(event.keyCode === 38){
            console.log(KeyActon.Revers)
        }
    }

    render() {
        return (
            <div className="App-board">
                <AppTableBoard modelData={this.state.modelData}>
                </AppTableBoard>
                <AppControlsBlock></AppControlsBlock>
            </div>
        );
    }
}
export default AppBoard;
