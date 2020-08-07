function power(base, exponent) {
  if (exponent === undefined) exponent = 2;

  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result
}

/**
 * Recursion usually ten times slower than loops
 */
function powerUsingRecursion(base, exponent) {
  if ( exponent === 0) {
    return 1
  } else {
    return base * powerUsingRecursion(base, exponent - 1)
  }
}

export { power, powerUsingRecursion }
