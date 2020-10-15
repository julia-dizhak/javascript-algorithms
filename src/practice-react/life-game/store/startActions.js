import allActionsTypes from './actions'

const startGeneration = (isRunning) => {
  return {
    type: allActionsTypes.START_GENERATION,
    payload: isRunning
  }
}

export default {
  startGeneration
}