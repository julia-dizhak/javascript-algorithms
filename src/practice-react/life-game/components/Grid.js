import React, { Component } from 'react';
import Square from '../components/Square';

/*
todo key unique
*/

const Grid = ({ gridState, rows, cols }) => {
 //console.log('gridState', gridState);

  // if gridState is null do not render 
  let line = [];
  for (let r = 0; r < rows; r++) {
    let cells = [];
    for (let c = 0; c < cols; c++) {
      cells.push(
        <Square 
          key={`${r},${c}`}
          //className={gridState[r][c] == 1 ? 'alive col1' : 'dead col1'}
          className={gridState[r][c] ? 'alive col1' : 'dead col1'}
        />
      )
    }
    line.push(
      <div 
        className="row1"
        key={r}>
          {cells}
      </div>
    )
  }

  return (
    <div className="grid">
      <div className="container1">
        {line}
      </div>
      
    </div>  
  )
}

export { Grid };
