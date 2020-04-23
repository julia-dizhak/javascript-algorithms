const loopNTimes = function(n) {
  console.log('n times', n);
  if ( n <= 1) {
    return 'complete'
  }
  return loopNTimes(n-1);
}

loopNTimes(3);
