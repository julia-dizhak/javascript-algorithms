const loopNTimes = function(n) {
  if ( n <= 1) {
    return 'complete'
  }
  return loopNTimes(n-1);
}

/**
 * Factorial of a Number: return the factorial of the provided integer.
 * Desc: if the integer is represented with the n, a factorial is the product
 * of all positive integers less than or equal to n.
 *
 * solution(5) --> 5! = 1 * 2 * 3 * 4 * 5 = 120
 * 0! = 1
 * 1! = 1
 * 2! = 2 * 1
 * 3! = 3 * 2 * 1
 * 4! = 4 * 3 * 2 * 1
 * 5! = 5 * 4 * 3 * 2 * 1
 *
 * position of stack trace
 *
 * First Part of the recursion method
 * You need to remember that you won’t have just one call, you’ll have several nested calls
 * Each call: n === "?"        	          n * factorial(n - 1)
 * 1st call: factorial(5) will return     5 * factorial(5 - 1) // -> factorial(4)
 * 2nd call – factorial(4) will return    4 * factorial(4 - 1) // factorial(3)
 * 3rd call – factorial(3) will return    3 * factorial(3 - 1) // factorial(2)
 * 4th call – factorial(2) will return    2 * factorial(2 - 1) // factorial(1)
 * 5th call – factorial(1) will return    1 * factorial(1 - 1) // factorial(0)
 *
 * Second part of the recursion method
 * The method hits the if condition, it returns 1 which num will multiply itself with
 * The function will exit with the total value
 * 5th call will return (5 * (5 - 1))     // n = 5 * 4
 * 4th call will return (20 * (4 - 1))    // n = 20 * 3
 * 3rd call will return (60 * (3 - 1))    // n = 60 * 2
 * 2nd call will return (120 * (2 - 1))   // n = 120 * 1
 * 1st call will return (120)             // n = 120
 * If we sum up all the calls in one line, we have
 * (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
 *
 * @param {number}
 * @return {number}
*/
function factorialUseLoop(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i
  }

  return result;
}

function factorialUseLoopOperatorMinus(n) {
  if ( n < 0 ) {
    return -1;
  }

  if (n === 0 || n === 1 ) {
    return 1;
  }

  for (let i = n - 1; i >= 1; i--) {
    n = n * i
  }

  return n;
}

function factorialUseWhileLoop(n) {
  let result = n;
  if ( n < 0 ) {
    result = -1;
  }

  if (n === 0 || n === 1) {
    result = 1
  }

  while (n > 1) {
    n--;
    result *= n;
  }

  return result;
}

function factorial(n) {
  // if the number is less than 0, reject it
  if ( n < 0 ) {
    return -1;
  }

  if (n === 0) {
    // works with (n === 1) as well
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorialUseLoopOperatorMinus(3);

export { factorialUseLoop, factorial, factorialUseWhileLoop, factorialUseLoopOperatorMinus, loopNTimes }
