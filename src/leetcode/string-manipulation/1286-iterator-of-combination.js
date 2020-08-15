/*
Leetcode
1286 Design Iterator for combination
medium

Design an Iterator class, which has:

A constructor that takes a string characters of sorted distinct lowercase English
letters and a number combinationLength as arguments.

A function next() that returns the next combination of length combinationLength
in lexicographical order.

A function hasNext() that returns True if and only if there exists a next
combination.


Example:
CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the
iterator.

iterator.next(); // returns "ab"
iterator.hasNext(); // returns true
iterator.next(); // returns "ac"
iterator.hasNext(); // returns true
iterator.next(); // returns "bc"
iterator.hasNext(); // returns false

Hint 1
Generate all combinations as a preprocessing.

Hint 2
Use bit masking to generate all the combinations.


Constraints:
1 <= combinationLength <= characters.length <= 15
There will be at most 10^4 function calls per test.
It's guaranteed that all calls of the function next are valid.
*/

/*
Approach

todo design
https://www.youtube.com/watch?time_continue=3&v=PJ1dfw4bYxw&feature=emb_logo

sorted distinct lowercase English letters
what is a combinations?

todo check Backtracking check N queen problem, sum of subset


input abc
output
abc
acb
bac
bcd
cab
cba
n = 3! = 6

str = 4 = boat 4! = 24

There is good explanation of backtracking
https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript

*/

class CombinationIterator {
  /**
   * @param {string} characters
   * @param {number} combinationLength
  */
  constructor(characters, combinationLength) {
    this.characters = characters;
    this.combinationLength = combinationLength;
  }

  /**
   * @return {string}
   */
  next() {

  }

  /**
   * @return {boolean}
   */
  hasNext() {

  }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const iterator = new CombinationIterator('abc', 2)
iterator.next();

export {
  //permut,
  //permute
}
