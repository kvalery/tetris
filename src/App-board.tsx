import React from 'react';
import './App.scss';
import AppTableBoard from './App-table-board';

class AppBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardModel: [
                [true,true,true,true,true,true,true,true,true,],
                [true,true,true,true,true,true,true,true,true,],
                [true,true,false,true,true,true,true,true,true,],
                [true,true,false,false,true,true,true,true,true,],
                [true,true,true,false,true,true,true,true,true,],
                [true,true,true,true,true,true,true,true,true,]
            ],
        };
    }

    handleTest (e) {
        console.log(e)
        if (e.charCode == 13) {
            alert('Enter... (KeyPress, use charCode)');
        }
        if (e.keyCode == 13) {
            alert('Enter... (KeyDown, use keyCode)');
        }
    }

    render() {
        return (
            <div className="App-board">
                {/*<textarea onKeyPress={this.handleTest} />*/}
                <AppTableBoard
                    onKeyPress={this.handleTest}
                    model={this.state.boardModel}>
                </AppTableBoard>
            </div>
        );
    }
}
export default AppBoard;
