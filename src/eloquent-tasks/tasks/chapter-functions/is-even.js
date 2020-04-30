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

// closure
// ###  What will be the output of the following code?
function myFunction(a) {
  var b = 6;
  return function(b) {
  console.log(b, a)
  }
 }
 var testFunction = myFunction(2)
 testFunction(3)

// Що буде знаходитись у secondVar після виконання наступного коду?
var firstVar = 'foo';
var secondVar;
switch(firstVar) {
 case 'foo':
 secondVar = 'bar';
 case 'bar':
 secondVar = 'foo';
 case 'foobar':
 secondVar = 'barfoo';
 break;
 default:
 secondVar = 'foobar';
}

//
let obj1 = {
  name: 'test',
  f: 'K'
}

let obj2 = {
  name: 'test1',
  f: 'K1'
}

const t = {
  ...obj1,
  ...obj2
}
