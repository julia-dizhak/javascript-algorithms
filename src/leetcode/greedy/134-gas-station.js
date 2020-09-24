
/*
Leetcode
134 Gas station
Medium 

There are N gas stations along a circular route, where the amount of gas at 
station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel 
from station i to its next station (i+1). You begin the journey with an empty 
tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit 
once in the clockwise direction, otherwise return -1.

Note:
If there exists a solution, it is guaranteed to be unique.
Both input arrays are non-empty and have the same length.
Each element in the input arrays is a non-negative integer.

Example 1:
Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

Example 2:
Input: 
gas  = [2,3,4]
cost = [3,4,3]
Output: -1

Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
*/

/*
Approach 1 Pass

1 If the total number of gas is bigger than the total number of cost. There must 
be a solution.

2 The tank should never be negative, so restart whenever there is a negative number.
*/
var canCompleteCircuit = function(gas, cost) {

}

/*
Approach 

1 Take a variable start and initialize it to 0, and an another variable end and 
then initialize it to 1.

2 We will loop from start to end and keep increment end until it reaches the same 
value as start. For example, if our arrays is of length 5 then :1->2->3->4->0. 
In that case we will know that start is the index from where the answer comes from.

3 For storing the current gas in our car, we will use another variable curr and 
then if at any point of time, if curr becomes negative that means, that index 
can not be the starting point. In that case, we will increment the start by 1.

4 There is just one tiny problem. We know how to move forward in an array, 
I mean, I could just increment the current pointer. But, how do I get back. 
I mean my pointer goes like this : 1->2->3–>4->5->6……. and so on. It won’t come 
back like : 1->2->3->4->1.
To solve this problem, you just need to use a simple trick. Instead of increment 
the value like : n=n+1, what we can do is : n=(n+1)%length.
In that case, when the pointer gets to the end, it will again start from the zero.
*/
var canCompleteCircuit1 = function(gas, cost) {
  if (gas.length === 0) return -1;
  if (gas.length === 1) return gas[0] - cost[0] > 0 ? 0 : -1;

  let start = 0;
  let end = 1;
  let curr = gas[0] - cost[0];

  while (start != end) {
    while (curr < 0 && start != end) {
      curr = curr - (gas[start] - cost[start]);
      start = (start + 1) % gas.length;
      if (start === 0) return -1;
    }
    curr += gas[end] - cost[end];
    end = (end+1) % gas.length;
  }
  
  if (curr < 0) return -1;
  return start;
}

console.log('gas', canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log('gas', canCompleteCircuit([2,3,4], [3,4,3]));
console.log('gas', canCompleteCircuit([1,2], [2,1]));

export {
  canCompleteCircuit1
}