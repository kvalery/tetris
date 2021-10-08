import React from 'react';
import './App.scss';
// import { IAppTableBoard } from './interface/IAppTableBoard';

interface Props {
    modelData: boolean[][]
}

interface State {
    modelData: any
}

class AppTableBoard extends React.Component<Props, State> {
    constructor(props: { modelData: [[boolean]] }) {
        super(props);
        this.state = { modelData: props.modelData };
    }

    handleTest (e: any) {
        console.log(e)
        console.log(e.charCode)
        if (e.charCode == 13) {
            alert('Enter... (KeyPress, use charCode)');
        }
        if (e.keyCode == 13) {
            alert('Enter... (KeyDown, use keyCode)');
        }
    }

    renderTableLine( model: [boolean] ) {
        return (
            <tr className="full">
                { model.map(( item ) => {
                 const className = (item)? 'empty' : 'full'
                 return <td className={className}></td>
               })}
            </tr>
        )
    }

    renderTable(model: any) {
        return (
            <tbody onKeyPress={this.handleTest}>
                { model.map(( item: any ) => {
                   return  this.renderTableLine(item)
                  })}
            </tbody>
        )
    }

    render() {
        return (
            <div className="App-table-board">
                <table>
                    { this.renderTable(this.state.modelData) }
                </table>
            </div>
        );
    }
}
export default AppTableBoard;
