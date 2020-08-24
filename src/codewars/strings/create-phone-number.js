/*
Write a function that accepts an array of 10 integers (between 0 and 9), that
returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

// My solution
function createPhoneNumber1(numbers) {
  let result = '';
  for (let i=0; i < numbers.length; i++) {
    if (i === 0) {
      result += '('
    }
    if (i === 3) {
      result += ') ';
    }
    if (i === 6) {
      result += '-';
    }
    result += numbers[i];
  }
  return result;
};

// Use replace
function createPhoneNumber2(numbers) {
  return numbers.reduce((phoneNum, digit) => phoneNum.replace('x', digit), '(xxx) xxx-xxxx')
}

function createPhoneNumber3(numbers) {
  let format = '(xxx) xxx-xxxx';
  numbers.forEach(num => {
    format = format.replace('x', num);
  });
  return format;
}

// Use replace + regex
function createPhoneNumber4(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(.*)/, '($1) $2 $3')
}

// Use slice
function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return '(' + numbers.slice(0,3) + ') ' + numbers.slice(3,6) + '-' + numbers.slice(6);
}

// tests
console.log('createPhoneNumber', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log('createPhoneNumber', createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log('createPhoneNumber', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


/*
Match next patterns for phone number

1234567890
123 4567890
123 456 7890
(123) 4567890
(123) 456 7890
(123) 456-7890
*/



export {
  createPhoneNumber,
  createPhoneNumber1,
  createPhoneNumber2,
  createPhoneNumber3,
  createPhoneNumber4
}
