/*
Leetcode
1029 Two city Scheduling
easy

There are 2N people a company is planning to interview.
The cost of flying the i-th person to city A is costs[i][0],
and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such
that exactly N people arrive in each city.

Example 1:
Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

Note:
1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000
*/

/*
Approach 1 Greedy

Actual cost parameter (profit margin) is how much more we benefit
if we choose to go to city A rather then city B.

Let's figure out how to sort the input here.
The input should be sorted by a parameter which indicates a money lost for the company.

The company would pay anyway: price_A to send a person to the city A,
or price_B to send a person to the city B. By sending the person to the city A,
the company would lose price_A - price_B, which could negative or positive.

To optimize the total costs, let's sort the persons by price_A - price_B
and then send the first n persons to the city A,
and the others to the city B, because this way the company costs are minimal.

Complexity Analysis
Time complexity: O(n log n) because of sorting of input data.
Space complexity: O(1) since it's a constant space solution.
*/

/**
 * @param {number[][]} costs
 * @return {number}
*/
var twoCitySchedCost = function(costs) {
  // sort by a gain which company has
  // by sending a person to city A and not to city B
  // function compare(a,b) {
  //   if (a<b) return -1
  //   if (a>b) return 1;
  //   // must be equal
  //   return 0
  // }
  // [10,20], // 10 - 20 - (200 - 30) = -10 - 170 = - 180
  // [30,200],
  // [400,50],
  // [30,20]
  costs = costs.sort((a, b) => a[0] - b[0] - (a[1] - b[1]));

  let total = 0;
  const midIndex = costs.length/2;

  // to optimize the company expenses,
  // send the first n persons to the city A
  // and the others to the city B
  for (let i = 0; i < midIndex; i++) {
    total += costs[i][0] + costs[i + midIndex][1]
  }

  return total;
};

/*
  The same approach as previous
  but based on price_B - price_A
*/
var twoCitySchedCostVariant2 = function(costs) {
  // opposite sorting price_B - price_A
  costs.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]));

  let total = 0;
  const len = costs.length;
  const midIndex = Math.floor(len/2);

  for (let i = 0; i < midIndex; i++) {
    total+= costs[i][1] + costs[len - 1 - i][0];
  }

  return total;
};

/*
Approach Greedy
The same approach: sort in descending order, take absolute difference
sort from largest impact to smallest impact

- because only N people should arrive in each city
2n = length of arr
n = length of arr / 2

- have counters for each city to keep track of how many people we
flown to that city

- when adding to the sum we pick the city with the lower costs
as long as city is under the N
*/

var twoCitySchedCostSortAbs = function(costs) {
  // costs city A descending order
  costs = costs.sort((a, b) => {
    return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1])
  });

  //console.log('costs', costs)

  // another solution for sorted, works as well
  // costs = costs.sort((a, b) => {
  //   const aDiff = a[0] > a[1] ? a[0] - a[1] : a[1] - a[0];
  //   const bDiff = b[0] > b[1] ? b[0] - b[1] : b[1] - b[0];
  //   return bDiff - aDiff;
  // });

  let sum = 0;
  const len = costs.length;
  const midIndex = Math.floor(len/2);

  let counterA = 0;
  let counterB = 0;

  for (let i = 0; i < len; i++) {
    let costCityA = costs[i][0];
    let costCityB = costs[i][1];

    if (costCityA <= costCityB) {
      if (counterA < midIndex) {
        sum += costCityA;
        counterA++;
      } else {
        sum += costCityB;
        counterB++;
      }
    } else {
      if (counterB < midIndex) {
        sum += costCityB;
        counterB++;
      } else {
        sum += costCityA;
        counterA++;
      }
    }
  }

  return sum;
};

// console.log('twoCitySchedCostSortAbs', twoCitySchedCostSortAbs([[10,20],[30,200],[400,50],[30,20]]))

export {
  twoCitySchedCost,
  twoCitySchedCostSortAbs
}
