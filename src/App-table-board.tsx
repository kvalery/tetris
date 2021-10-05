import React from 'react';
import './App.scss';

class AppTableBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.model;
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

    renderTable(model) {
        return (
            <tbody>
                { model.map(( item ) => {
                   return  this.renderTableLine(item)
                  })}
            </tbody>
        )
    }

    render() {
        return (
            <div className="App-table-board">
                <table border="1">
                    { this.renderTable(this.state) }
                </table>
            </div>
        );
    }
}
export default AppTableBoard;
