import { make2DArray, defineNextGeneration } from '../utils/generationInit';


const initialState = {
  gridState: [],
  rows: 20,
  cols: 20,
  generation: 0,
  isRunning: false,
  speed: 500,
}

// todo just one reducer enough
export default function reducer(state = initialState, action) {
  const initGridState = make2DArray(20, 20);

  switch (action.type) {
    case 'BOOTSTRAP_APP':
      return {
        ...state, 
        gridState: initGridState
      };
    
    case 'HANDLE_RUN':
      return {
        ...state, 
        isRunning: true
      };  

    case 'HANDLE_STOP':
      return {
        ...state, 
        isRunning: false
      };   
      
    case 'HANDLE_NEW_GENERATION':
      return {
        ...state, 
        generation: 0,
        gridState: initGridState
      };   

    case 'HANDLE_NEXT_GENERATION':
      const prevState = state.gridState;
      const nextGenerationState = defineNextGeneration(prevState);
      return {
        ...state, 
        generation: state.generation + 1,
        gridState: nextGenerationState
      };   
      

    default: 
      return state
  }
}

export {
  initialState
}