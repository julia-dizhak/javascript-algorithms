/*
Leetcode
1556 Thousand separator

Given an integer n, add a dot (".") as the thousands separator and return it in string format.

Example 1:
Input: n = 987
Output: "987"

Example 2:
Input: n = 1234
Output: "1.234"

Example 3:
Input: n = 123456789
Output: "123.456.789"

Example 4:
Input: n = 0
Output: "0"

Constraints:
0 <= n < 2^31

Hint
Scan from the back of the integer and use dots to connect blocks with length 3
except the last block.
*/

/*
Approach iterative
time is O(n)
space is O(n)
*/
/**
 * @param {number} n
 * @return {string}
*/
var thousandSeparator1 = function(n) {
  n = n.toString();
  let s = '';
  let count = 0;

  for (let i = n.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && count !== 0) {
      s += '.';
    }
    s += n.charAt(i);
    count++;
  }

  return s.split('').reverse().join('');
}

var thousandSeparator2 = function(n) {
  let num = n.toString();
  let count = 0;
  let s = '';

  for (let i = num.length - 1; i >= 0; i--) {

    if (count % 3 === 0 && count !== 0) {
      s = '.' + s;
    }
    s = num.charAt(i) + s;
    count++;
  }

  return s;
};

var thousandSeparator3 = function(n) {
  n = n.toString();
  let res = '';

  for (let i = 0; i < n.length; ++i) {
    // it checks that we have 3, 6, 9 and so on digits after the current one. So we need to place a separator.
    if (i > 0 && (n.length - i) % 3 === 0) res += ".";
    res += n[i];
  }
  return res;
}

// Approach toLocaleString
var thousandSeparator4 = function(n) {
  return n.toLocaleString()
};

/*
replace and regex
*/
var thousandSeparator = function(n) {
  //return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
};

// tests
console.log('thousandSeparator', thousandSeparator(987));
console.log('thousandSeparator', thousandSeparator(1234));
console.log('thousandSeparator', thousandSeparator(123456789));
console.log('thousandSeparator', thousandSeparator(0));

export {
  thousandSeparator,
  thousandSeparator1,
  thousandSeparator2,
  thousandSeparator3,
  thousandSeparator4
}
