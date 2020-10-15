import React, { useEffect, useState, useRef } from 'react';
import { Grid } from './components/Grid';

import { make2DArray, defineNextGeneration } from './utils/generationInit';

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import allActionsTypes from './store/actions';
import { allActions } from './store/actions';

function Game() {
  // const gridState = useSelector(state => state.gridState);
  // const generation = useSelector(state => state.generation);
  const isRunning = useSelector(state => state.isRunning);

  const { gridState, generation, speed } = useSelector(state => ({
    gridState: state.gridState,
    generation: state.generation,
    speed: state.speed
  }), shallowEqual);

  // todo check dispatch, describe as actions
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: allActionsTypes.BOOTSTRAP_APP})
  }, [dispatch]);
  

  useEffect(() => {
    //dispatch(allActions.startActions.startGeneration(isRunning))
    let id;
    if (isRunning) {
      id = setInterval(() => {
        dispatch({type: 'HANDLE_NEXT_GENERATION'})
      }, speed);
    } 
    
    if (!isRunning) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [isRunning]);
 
  // todo probably all controls in one function
  const renderControls = (isRunning) => {
    return isRunning ? 
      <button type='button' onClick={() => dispatch({type: 'HANDLE_STOP'})}>Stop</button> 
      :
      <button type='button' onClick={() => dispatch({type: allActionsTypes.HANDLE_RUN })}>Start</button>;
  }

  return (
    <>
      <div className="game">
        <h1>Game of Life</h1>
        {/* count {count} */}
        {/* Now: {isRunning}, before: {prevIsRunning} */}
        
        {gridState.length > 0 ? 
          <Grid 
            gridState={gridState}
          />:
          null  
        }
        <div className='flexRow upperControls'>
          {`Generation: ${generation}`}
        </div>
        
        <div className='flexRow lowerControls'>
          <button 
            type='button' 
            disabled={isRunning} 
            onClick={() => dispatch({type: 'HANDLE_NEXT_GENERATION'})}>
              Next generation in one step
          </button>
          {renderControls(isRunning)}
          <button 
            type='button' 
            disabled={isRunning} 
            onClick={() => dispatch({type: 'HANDLE_NEW_GENERATION'})}>
              New init Generation
          </button>
        </div>  
      </div>  
    </>  
  )
}

export default Game;
