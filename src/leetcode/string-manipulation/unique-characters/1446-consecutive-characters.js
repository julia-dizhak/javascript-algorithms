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

/*
Approach One pass

Intuition and Algorithm

Recall the problem, we need to find "the maximum length of a non-empty substring 
that contains only one unique character".

In other words, we need to find the Longest Substring with the same characters.

We can iterate over the given string, and use a variable count to record the 
length of that substring.

When the next character is the same as the previous one, we increase count by one. 
Else, we reset count to 1.

With this method, when reaching the end of a substring with the same characters, 
count will be the length of that substring, since we reset the count when that 
substring starts, and increase count when iterate that substring.

Therefore, the maximum value of count is what we need. Another variable is needed 
to store the maximum while iterating.

Complexity Analysis

Let N be the length of s.
Time Complexity: O(N), since we perform one loop through s.

Space Complexity: O(1), since we only have two integer variables count and 
max_count(maxCount), and one character variable previous.
*/
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let maxCount = 0;
  let count = 0;
  let prev = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (prev === char) {
      count++;
    } else {
      count = 1;
      prev = s[i];
    }
    maxCount = Math.max(maxCount, count);
  }
  //console.log(maxCount);
  return maxCount
}
// the sam approach
function maxPower1(s) {
  if (s.length == 1) return 1;
  let currMax = 0;
  let max = 0;
  
  for (let i=1; i<s.length; i++) {
    if (s[i] == s[i-1]) currMax++;
    else currMax = 0;
      
    max = Math.max(max, currMax+1);
  }
  
  return max;
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
  //console.log(power);
  return Math.max(...power)
};

//console.log('maxPower', maxPower('leetcode'));
//console.log('maxPower', maxPower('abbcccddddeeeeedcba'));
// console.log('maxPower', maxPower('triplepillooooow'));
// console.log('maxPower', maxPower('hooraaaaaaaaaaay'));
//console.log('maxPower', maxPower('tourist'));

export {
  maxPower,
  maxPowerUseArr,
  maxPower1
}
