/*
Leetcode
528 Random pick with weight
medium

Given an array w of positive integers, where w[i] describes the weight of index i,
write a function pickIndex which randomly picks an index in proportion
to its weight.

Example 1:
Input:
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]

Example 2:
Input:
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]

Explanation of Input Syntax:
The input is two lists: the subroutines called and their arguments.
Solution's constructor has one argument, the array w. pickIndex has no arguments.
Arguments are always wrapped with a list, even if there aren't any.

Note:
1 <= w.length <= 10000
1 <= w[i] <= 10^5
pickIndex will be called at most 10000 times.
*/

/*
Problem explaining in human way

Given an array w of positive integers sent to Solution(),
where w[i] describes the weight of index i.
[1,3] would mean index 0 has weight 1, while index 1 has weight 3.
Write a function pickIndex() which randomly picks an index in proportion to its weight.
pickIndex() will be called multiple times.

The problem is, we need to randomly pick an index proportional to its weight.
What this means?
We have weights array, each weights[i] represents weight of index i.
The more the weight is, then high chances of getting that index randomly.
suppose weights = [1, 3]
then 3 is larger, so there are high chances to get index 1.
We can know the chances of selecting each index by knowing their probability.
P(i) = weight[i] / totalWeight
totalWeight = 1 + 3 = 4
So, for index 0, P(0) = 1/4  = 0.25 = 25%
for index 1, P(1) = 3/4 = 0.75 = 75%
So, there are 25% of chances to pick index 0 and 75% chances to pick index 1.

Example 1:
Input w = [1]
expected return values from pickIndex() calls: 0

Example 2:
Input: w = [1,3]
expected return values from pickIndex() calls: 0,1,1,1,0

More examples:
So in the case w = [2, 98],
your pickIndex() should return index 1 for 98% and index 0 for 2%.
In the case w = [1, 99] , your pickIndex() should return 1 for 99% and 0 for 1%.


Explanation of Input Syntax:
Input:
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
Solution and pickIndex and in second-line then have taken an array of subarrays.

Solution:- it creates an object for Solution class with data containing weights [1],
For creation of Solution of object, we don't need to return anything.
So, it is null.

pickIndex: Now, pickIndex method is called on that object,
here we need to do some calculations and return an index.
For pickIndex method, we need to return an index.

How will binarySearch work here?
The probabilities array value precision wouldn't be same with random number.

Yes, but binary search method return index of probability if it is found.
If it is not found, then it returns index where it will be in the array
if it is present.
So, binary search works well.
*/

/*
Approach binary search

Example: input w = [2,4,1,5,3]
index      -> 0 1 2 3 4
w          -> 2 4 1 5 3
sum[index] -> 2 6 7 12 15
           -> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

test w = [2,4,1,5,3]
number 9 index 3

number 6 -> index 1

Time complexity O(log n) because of binary search
Space complexity O(n) create array of sums
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
/**
 * @param {number[]} w
*/
class Solution {
  constructor(w) {
    this.newWeights = [];
    this.totalWeight = 0;

    for (const val of w) {
      this.totalWeight += val;
      this.newWeights.push(this.totalWeight); // sorted arr, can use binary search
    }
  }

  pickIndex(pick) {
    const { newWeights } = this;
    pick = (pick === undefined) ? getRandomInt(this.totalWeight) : pick;
    console.log('pick', pick);

    let left = 0;
    let right = newWeights.length - 1;
    console.log('newWeights', newWeights);

    while (left <= right) {
      const mid = Math.floor(left + (right - left)/2);
      console.log('mid', mid);

      if (pick === newWeights[mid]) {
        return mid;
      } else if (pick < newWeights[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
*/
const obj = new Solution([2,4,1,5,3]);
obj.pickIndex(6)


export { Solution }
