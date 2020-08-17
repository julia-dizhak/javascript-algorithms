/*
Leetcode
1103 Distribute candies to people
easy

We distribute some number of candies, to a row of n = num_people people in the
following way:
We then give 1 candy to the first person, 2 candies to the second person,
and so on until we give n candies to the last person.

Then, we go back to the start of the row, giving n + 1 candies to the first
person, n + 2 candies to the second person, and so on until we give 2 * n candies
to the last person.

This process repeats (with us giving one more candy each time, and moving to
the start of the row after we reach the end) until we run out of candies.
The last person will receive all of our remaining candies (not necessarily
one more than the previous gift).

Return an array (of length num_people and sum candies) that represents the final
distribution of candies.

Hint 1
Give candy to everyone each "turn" first [until you can't], then give candy
to one person per turn.

Example 1:
Input: candies = 7, num_people = 4
Output: [1,2,3,1]

Explanation:
On the first turn, ans[0] += 1, and the array is [1,0,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0,0].
On the third turn, ans[2] += 3, and the array is [1,2,3,0].
On the fourth turn, ans[3] += 1 (because there is only one candy left), and
the final array is [1,2,3,1].

Example 2:
Input: candies = 10, num_people = 3
Output: [5,2,3]

Explanation:
On the first turn, ans[0] += 1, and the array is [1,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0].
On the third turn, ans[2] += 3, and the array is [1,2,3].
On the fourth turn, ans[0] += 4, and the final array is [5,2,3].


Constraints:
1 <= candies <= 10^9
1 <= num_people <= 1000
*/

/*
Approach iterative (loop)
time is O(n)
*/
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let output = new Array(num_people).fill(0);
  const n = output.length;


  // while (candies > 0) {
  for (let i = 0; i < n; i++) {
    //debugger
    if (candies >= 0 && candies >= i+1) {
      output[i] = i+1;
    } else {
      output[i] = candies;
      break
    }
    candies -= (i+1);
  }

  let j = 0;
  while (candies > 0) {
    //debugger
    if (j>=n) {
      j = 0
    }
    if (candies >= output[j]+n+1 ) {
      // n+1
      output[j] = output[j] + n + 1;
    } else {
      output[j] = output[j] + candies;
      break;
    }
    candies -= j + (n + 1);
    j++;
  }

  return output;
};

var distributeCandiesUseLoop = function(candies, num_people) {
  let output = new Array(num_people).fill(0);
  let loop = 0;

  let i = 0;
  while (candies > 0) {
    if (i === num_people) {
      loop++;
      i = 0;
    }

    let currentCandy = (loop * num_people) + (i+1);
    if (candies < currentCandy) {
      output[i] += candies;
      break;
    }
    output[i] += currentCandy;
    candies -=currentCandy
    i++;

  }

  return output;
}

// tests
//console.log('distributeCandies', distributeCandies(7, 4)) // [1,2,3,1]
//console.log('distributeCandies', distributeCandies(10, 3)) // [5,2,3]
console.log('distributeCandies', distributeCandies(28, 3)) // [12,7,9]?

export {
  distributeCandies,
  distributeCandiesUseLoop
}
