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
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of
them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining
two with no more than 3 citations each, her h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as
the h-index.

Hint 1
An easy approach is to sort the array first.

Hint 2
What are the possible values of h-index?

Hint 3
A faster approach is to use extra space.
*/


/*

Counting sort
O(n) time
input is only positive integers
counters occurence
arr = [4,3,1,2,0]
k is amount of unique values
laregest item is 4
track occurences of numbers 0,1,2,3,4
count 0  1  2  3  4 - 5 positions
      1  1  1   1  1
put 1 at position 4
put 1 at position 3
put 1 at position 1
put 1 at position 2
put 1 at position 0

each of items occured just once - [1,1,1,1,1] this array holds elements from 0 to k -1
5 total items which is k

running sum start from position 1 what is value here + value behind me: 1+ 1
index 1  count: 1 2 1 1 1
index 2 count: 1 2 3 1 1 - value at pos 2 + value behind me
3: 1 2 3 4 1
4: 1 2 3 4 5 just took running sums

index 3 has a value of 4 = there 4 occurrence of value less than of equal 3 =
we have 0,1,2,3
let say we have index 2 = 0,1,2

placement step
place a role in placements
represent last position item can occur

final work backwards
count array 1 2 3 4 5
0
0

4 for loops

time is linear

todo
https://github.com/bephrem1/backtobackswe/blob/master/Sorting%2C%20Searching%2C%20%26%20Heaps/CountingSort/CountingSort.java
video https://www.youtube.com/watch?v=1mh2vilbZMg
*/

/*
Approach

todo explanation https://www.youtube.com/watch?v=zzTUtpBQh4k
*/
var hIndexSort = function(citations) {
  if (citations === null || citations.length === 0) return 0;
  citations = citations.sort((a,b) => a - b);
  const n = citations.length;
  for (let i = 1; i <= n; i++) {
    if (citations[n-i] >= i) break;
    return i-1;
  }
  return 0
}

/*
Approach sort

time is O(n log n)
space is O(1)

*/
var hIndexSort = function(citations) {
  if (citations === null || citations.length === 0) return 0;
  //debugger
  citations = citations.sort((a,b) => a - b);
  const n = citations.length;
  for (let i = 0; i < n; i++) {
    if (citations[i] >= n - i) return n - i
  }
  return 0;
}

// provide a test
console.log('hIndexSort', hIndexSort([3,0,6,1,5]));
console.log('hIndexSort 1', hIndexSort([0,1,1,1,1,1,2,2,2,2]));

/*
Approach

The idea is to see that the result can only range from 0 to the length of the array
(because we can't have h-index greater than the total papers published)
So we create an array which acts like a HashMap and loop backwards form the highest
element, then we find total which is the total number of papers that has more than
i citations, and we stop when total > i
(total number of papers with more that i citation >= i)
we don't need to keep going because we are trying the biggest i possible, we stop
and return result

complexity
...
*/
// todo bucket sort https://eavis.gitbooks.io/leetcode/content/h-index.html
// count sort
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const n = citations.length;
  let total = 0;
  let arr = new Array(n+1).fill(0);

  for (let i = 0; i < n; i++) {
    if (citations[i] >= n) arr[n]++
    else {
      arr[citations[i]]++
    }
  }
  //debugger

  for (let i = n; i > 0; i--) {
    total += arr[i];
    if (total >= i) return i;
  }

  console.log('arr', arr)
  return 0;
};

// provide a test
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
  hIndex,
  hIndexSort
}
