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
console.log('countDown', countDown(4))

export {
  loopNTimes,
  countDown
}
