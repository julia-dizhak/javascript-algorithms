import React from 'react';
import Grid from './components/Grid';
import { setup } from './index'

function Game() {
  // init state move to redux?
  const squareSize = 25;
  const width = 10;
  const height = 10;

  return (
    <Grid 
      width={width}
      height={height}
      squareSize={squareSize}
    />
  )
}

export default Game;
