/*
Leetcode
1446. Consecutive Characters
easy

Given a string s, the power of the string is the maximum length of a non-empty 
substring that contains only one unique character.

Return the power of the string.

Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Hint1
Keep an array power where power[i] is the maximum power of the i-th character.

hint2
The answer is max(power[i]).
*/

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {

}

/*
Approach use Array

time is O(n)
space is O(n)
*/
var maxPowerUseArr = function(s) {
  let power = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i-1] === s[i]) {
      power[i] = power[i-1] + 1;
    } else {
      power[i] = 1;
    }   
  }
  console.log(power);
  return Math.max(...power)
};

console.log('maxPower', maxPower('leetcode'));
// console.log('maxPower', maxPower('abbcccddddeeeeedcba'));
// console.log('maxPower', maxPower('triplepillooooow'));
// console.log('maxPower', maxPower('hooraaaaaaaaaaay'));
//console.log('maxPower', maxPower('tourist'));

export {
  maxPower,
  maxPowerUseArr
}
