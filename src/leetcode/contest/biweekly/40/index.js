/*
Biweekly contest 40
I solved 1 problem

*/

/*
Leetcode 
1668 Max repeating substr
easy

For a string sequence, a string word is k-repeating if word concatenated k times 
is a substring of sequence. The word's maximum k-repeating value is the highest 
value k where word is k-repeating in sequence. If word is not a substring of 
sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in 
sequence.

hint 1

hint 2

*/

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  let k = 0;  
  let pos = sequence.indexOf(word);
  console.log(pos);
  if (pos !== -1) {
    k++;
  }

  while (sequence.indexOf(word.repeat(k+1)) !== -1) {
    k++
  }

  return k;
};

// solution 
var maxRepeating1 = function(sequence, word) {
  let count = 0;
  let start = 0;
  let max = 0;
  const n = sequence.length;
  const wordLength = word.length;

  while (start + wordLength <= n) {
    let end = start + wordLength;
    if (sequence.slice(start, end) !== word) {
      start++;
      count = 0;
    } else {
      count++;
      max = Math.max(max, count);
      start += wordLength;
    }
  }

  return max;
}

// console.log('maxRepeating', maxRepeating1('ababc', 'ab'));
// console.log('maxRepeating', maxRepeating('ababc', 'ba'));
// console.log('maxRepeating', maxRepeating('ababc', 'ac'));
// // answer 1
// console.log('maxRepeating', maxRepeating('baba', 'b')); //1
// // answer 2
// console.log('maxRepeating', maxRepeating('acaab', 'a')); // 2
// // expected 1
