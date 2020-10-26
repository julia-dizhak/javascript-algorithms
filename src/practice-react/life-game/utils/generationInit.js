/*
Returns an array of arrays, each containing booleans values

The function’s parameter defaults to less than 30% chance of being alive, but 
fell free to experiment with other numbers.
generation.push(Math.random() > 0.4 ? 0 : 1);

*/

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// status = () => Math.random() < 0.3
function make2DArray(rows, cols, status = () => Math.random() < 0.3) {
  let grid = [];

  for (let r = 0; r < rows; r++) {
    grid[r] = [];
    for (let c = 0; c < cols; c++) {
      //grid[r][c] = getRandomInt(2);
      grid[r][c] = status();
    }
  }

  return grid;
}

const countTotalAmountAliveNeighbors = (grid, row, col) => {
  const rows = grid.length;
  const cols = grid[0].length;

  const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  return neighbors.reduce((amount, neighbor) => {
    const x = row + neighbor[0];
    const y = col + neighbor[1];

    const isOnEdge = (x >= 0 && x < rows && y >= 0 && y < cols);
    // if (isOnEdge && grid[x][y]) return amount + 1; 
    // else {
    //   return amount
    // }
    /* No need to count more than 4 alive neighbors due to rules */
    if (amount < 4 && isOnEdge && grid[x][y]) {
      return amount + 1;
    } else {
      return amount;
    }
  }, 0);
};

const defineNextGeneration = function(prevState) {
  const cloneStatus = JSON.parse(JSON.stringify(prevState));
  //console.log('prevState', prevState) 

  const rows = prevState.length;
  const cols = prevState[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      const totalAliveNeighbors = countTotalAmountAliveNeighbors(prevState,i,j);
      //console.log('totalAliveNeighbors', totalAliveNeighbors);
      // todo can change by 1 and 0
      const alive = prevState[i][j] ? true : false;
      /*
      The rules are:

      the cell = false becomes true (alive) when it has 3 life neighbours, otherwise it stays false;
      the cell = true dies when it has less than 2 lives (underpopulation) and 
      greater than 3 lives (overpopulation), otherwise it stays true;
      So reproduction happens with exactly 3 neighbors, death happens with < 2, 
      > 3 neighbours;
      */
      if (alive) {
        if (totalAliveNeighbors < 2 || totalAliveNeighbors > 3) cloneStatus[i][j] = false;
      } else {
        if (totalAliveNeighbors == 3) cloneStatus[i][j] = true;
      }
    }
  }

  //console.log('cloneStatus', cloneStatus) 
  return cloneStatus;
}
const previousState = make2DArray(3,3);
//const previousState = make2DArray(2,2);
//const previousState1 = make2DArray(4,4);
const nextGeneration = defineNextGeneration(previousState);

console.log('nextGeneration', nextGeneration)



export {
  make2DArray,
  defineNextGeneration,
  countTotalAmountAliveNeighbors
}