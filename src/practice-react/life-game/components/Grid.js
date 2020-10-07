import React, { Component } from 'react';
import Square from '../components/Square';

class Grid extends Component {
  constructor(props) {
    super(props);

    const generation = [];
    const w = Math.floor(props.width);
    const h = Math.floor(props.height);
    for (let i = 0; i < w * h; i++) {
      generation.push(Math.random() > 0.4 ? 0 : 1);
    }
    this.state = { 
      generation: generation,
      width: w,
      height: h,
      squareSize: props.squareSize // it's bad for performance
    }
  }

  index(x, y) {
    return Math.floor(x + y*this.state.width);
  }
  
  render() { 
    const { generation, height, width, squareSize } = this.state;
    console.log('generation', generation);
    let squares = [];

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const index = this.index(i,j);
        console.log(index);
        const alive = this.state.generation[index];
        const size = squareSize;
        squares.push(<Square alive={alive} size={size} />)
      }
    }


    
    return ( 
    <div className="squares">{squares}</div>
    );
  }
}

export default Grid;