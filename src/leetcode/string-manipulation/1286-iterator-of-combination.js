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

sorted distinct lowercase English letters
what is a combinations?

Backtracking is a method to solve problems by making a series of choices that
we can return  or backtrack to.
(N queen problem)

What do you do when you lose your keys?
I try to remember

The call stack remembers our choices and knows what to choose next.

String
substring == subarray
subsequence

permutations
A permutation is an arrangement of all or part of a set of objects, with regard
to the order of the arrangement.
For example, suppose we have a set of three letters: A, B, and C. We might ask
how many ways we can arrange 2 letters from that set. Each possible arrangement
would be an example of a permutation. The complete list of possible permutations
would be: AB, AC, BA, BC, CA, and CB.

combinations
Note the distinction between a permutation and a combination . A combination
focuses on the selection of objects without regard to the order in which they
are selected. A permutation, in contrast, focuses on the arrangement of objects
with regard to the order in which they are arranged. Thus, the letters AB and
BA represent two different permutations, because the order is different.
However, they represent only 1 combination; because order is not important in
a combination.

to determine if a question is a permutation or combination question, ask yourself
if order matters. If the order of things is important then it is a permutation
question, if the order doesn't matter then it is a combination question

Permute a String: given a string, print all permutation = backtraking problem
(generate all == compute all == backtracking)

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
Array and string can interchange

3 keys to backtracking
1 out choice
...
all permutations https://www.youtube.com/watch?v=GCm7m5671Ps&t=82s


problem
generation all combinations
use backtracking


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
