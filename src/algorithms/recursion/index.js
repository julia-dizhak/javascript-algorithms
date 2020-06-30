/*
Explain a recursion

*/
const loopNTimes = function(n) {
  if ( n <= 1) {
    return 'complete'
  }
  return loopNTimes(n-1);
}

const countDown = function(N) {
  console.log('N', N)
  // base case
  if (N <= 0) {
    return;
  }

  // recursive case
  return countDown(N-1);
}

// tests
//console.log('countDown', countDown(4))


/*
You’re given an array of numbers [2,4,6]
You have to add up all the numbers and return the total.
*/

function sumUseLoop(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

// Recursive approach
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}

//console.log('sumUseLoop', sum([2,4,6]))

// Find max list
function max(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1]
  }
  let subMax = max(arr.slice(1));
  return (arr[0] > subMax) ? arr[0] : subMax;
}

console.log('max', max([10,12,0,2,4,6,1]))

export {
  loopNTimes,
  countDown,
  sumUseLoop
}
