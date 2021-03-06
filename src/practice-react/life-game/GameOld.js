import React, { Component, useEffect } from 'react';
import { Grid } from './components/Grid';

import { make2DArray, defineNextGeneration } from './utils/generationInit';

// todo should not have class components
// rows 40, 60
  // init state move to redux?
const ROWS = 20 // 5 //20 // 40;
const COLS = 20 // 5 // 40 // 60;  
// rename to gridStatus
const initGridState = make2DArray(ROWS, COLS);
//console.log('initGridState', initGridState)

class Game extends Component {
  state = {
    gridState: initGridState,
    generation: 0,
    rows: ROWS,
    cols: COLS,
    isRunning: false,
    speed: Math.floor(1000 / 60)// 500
  };

  // Methods ...
  // to think how I can do it in functional component
  renderControls() {
    const { isRunning } = this.state;
    return isRunning ? 
      <button type='button' onClick={this.handleStop}>Stop</button> 
      :
      <button type='button' onClick={this.handleRun}>Start</button>;
  }


  handleRun = () => {
    this.setState({
      isRunning: true
    });
  }

  handleStop = () => {
    this.setState({
      isRunning: false
    });
  }


  handleNewGeneration = () => {
    // todo not a good solution
    // todo cool animation
    const initGridState = make2DArray(ROWS, COLS);
    this.setState({
      generation: 0,
      gridState: initGridState
    })
  }

  handleStep = () => {
    const { gridState } = this.state;
    const prevState = gridState;
    const nextGenerationState = defineNextGeneration(prevState);
    // this.setState({
    //   gridState: nextGenerationState
    // });

    this.setState(prevState => {
      // todo i'm not sure that its optimum
      //console.log('prevState', prevState.gridState)
      return {
        gridState: defineNextGeneration(prevState.gridState),
        generation: prevState.generation + 1
      }
    });
  }

  /*
  Then, within the componentDidUpdate Lifecycle method, let’s clear and/or set 
  a timer depending on different combinations of values. The timer schedules a 
  call to the handleStep method at the specified speed intervals.
  */
  componentDidUpdate(prevProps, prevState) {
    const { isRunning, speed } = this.state;
    const gameStarted = !prevState.isRunning && isRunning;
    const gameStopped = prevState.isRunning && !isRunning;
    

    if (isRunning || gameStopped) {
      clearInterval(this.timerID)
    }

    if (isRunning || gameStarted) {
			this.timerID = setInterval(() => {
				this.handleStep();
			}, speed);
    }
    

  }

  render() {
    const { gridState, rows, cols, generation, isRunning } = this.state;

    return (
      <div className="game">
        <h1>Game of Life</h1>
        <Grid 
          gridState={gridState}
          rows={rows}
          cols={cols}
        />
        <div className='flexRow upperControls'>
          {`Generation: ${generation}`}
        </div>
        <div className='flexRow lowerControls'>
          {this.renderControls()}
          <button 
            type='button' 
            disabled={isRunning} 
            onClick={this.handleStep}>
              Next generation in one step
            </button>
          {/* <button type='button' onClick={this.handleClearBoard}>Clear Board</button> */}
          <button 
            type='button' 
            disabled={isRunning} 
            onClick={this.handleNewGeneration}>
              New init Generation
            </button>
        </div>
      </div> 
    );
  }
}

export default Game;