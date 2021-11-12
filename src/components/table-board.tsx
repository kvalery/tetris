import React from 'react';

const TableBoard = (props: any) => {

  function renderTableLine( model: { value: boolean, index: number}[] ) {
    return (
      <tr >
        { model.map(( item ) => {
          const className = (!!item.value)? 'full' : 'empty'
          return <td key={ item.index } className={className}></td>
        })}
      </tr>
    )
  }

  function renderTable(model: any) {
    return (
      <tbody>
        { model.map(( item: any ) => {
        return renderTableLine(item)
      })}
      </tbody>
    )
  }

  return (
    <div className="App-table-board">
      <table>
        { renderTable(props.game.modelData) }
      </table>
    </div>
  );

};

export default TableBoard;
