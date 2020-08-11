/*
Leetcode
274 H-index
medium

Given an array of citations (each citation is a non-negative integer)
of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h
if h of his/her N papers have at least h citations each, and the other N − h papers
have no more than h citations each."

Example:
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had
received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining
two with no more than 3 citations each, her h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.

Hint 1
An easy approach is to sort the array first.

Hint 2
What are the possible values of h-index?

Hint 3
A faster approach is to use extra space.
*/

/*
Approach

The idea is ti see that the result can only range from 0 to the length of the array
(because we can't have h-index greater than the total papers published)
*/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const n = citations.length;
  const total = 0;
  let arr = new Array(n+1);

  for (let i = 0; i < n; i++) {
    if (citations[i] >= n) arr[n]++
    else {
      arr[citations[i]]++
    }
  }

  console.log('arr', arr)
};


console.log('hIndex', hIndex([3,0,6,1,5]))

/*
Leetcode
275 H-index II
medium

Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

Example:

Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had
             received 0, 1, 3, 5, 6 citations respectively.
             Since the researcher has 3 papers with at least 3 citations each and the remaining
             two with no more than 3 citations each, her h-index is 3.

Note:
If there are several possible values for h, the maximum one is taken as the h-index.

Follow up:
This is a follow up problem to H-Index, where citations is now guaranteed to be sorted in ascending order.
Could you solve it in logarithmic time complexity?
*/

// todo https://github.com/bobwei/algorithms/blob/master/src/leetcode/h-index-ii/index.js
// wiki https://en.wikipedia.org/wiki/H-index
// https://leetcode.com/problems/h-index-ii/discuss/71063/Standard-binary-search
// https://leetcode.com/problems/h-index-ii/discuss/71124/Java-binary-search-simple-and-clean

// tests

export {
  hIndex
}
