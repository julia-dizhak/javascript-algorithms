function isEven(n) {
  if ( n % 2 === 0) {
    return true
  } else if (n === 1 ) {
    return false
  } else if (n < 0) {
    return isEven(-n)
  } else return isEven(n-2)
}

/**
 * Chapter 3 functions
 * Bean Counting
 */

function countChar(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++
    }
  }

  return count;
}

function countBs(str) {
  return countChar(str, 'B')
}

export { isEven, countBs, countChar}
