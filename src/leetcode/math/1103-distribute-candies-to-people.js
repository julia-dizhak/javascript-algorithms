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
brute force

time is O(n)
space is O(num_people)
*/
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
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

/*
Approach loop + min

1 Use give % num_people to determine the current index of the people, where give
is the give-th giving of candy;

2 Increase each giving amount by 1 till run out of candies.

These tricks are so helpful. They have broadened my horizons.
people[give % num_people]: in order to calculate the each column's value
min(candies, give + 1): in order to add last remaining candies

Analysis:
Assume there are give times distribution such that 1 + 2 + ... + give >= candies.
Therefore,
(1 + give) * give / 2 >= candies, and when give is big enough, (give + 1) * give /2 ~ candies.

We have:
1/2 * give ^ 2 < 1/2 * (give ^ 2 + give)  < 1/ 2 * (give + 1) ^ 2
then
1/2 * give ^ 2 < candies < 1/ 2 * (give + 1) ^ 2

Time: O(sqrt(candies)), space: O(num_people).
*/

var distributeCandies1 = function(candies, num_people) {
  let output = new Array(num_people).fill(0);

  for (let give = 0; candies > 0; candies -= give) {
    output[give % num_people] += Math.min(candies, ++give);
  }
  return output
}

var distributeCandies2 = function(candies, num_people) {
  let output = new Array(num_people).fill(0);

  for (let i = 0; candies > 0; i++) {
    output[i % num_people] += Math.min(candies, i+1);
    candies -= i+1;
  }
  return output
}

/*
Approach Math Gauss

The other approach is to skip the simulation and calculate the final candy distribution.
Let's imagine the candy distribution process for candies = 10, and num_people = 3:
Person 0 receives 1 piece of candy, Person 1 receives 2 pieces of candy, Person 2 receives 3 pieces of candy then we go back to Person 0 to give them the remaining 4 pieces of candy.
So, generalize
Now let's go back to our rows - and add them up :

              p[0]            p[1]             ...       p[n - 1]
------------------------------------------------------------------------
0:              1                     2        ...           n
1:            n + 1                 n + 2      ...         2 * n
...            ...                   ...       ...          ...
k-1:  (k-1) * n + 1           (k-1)*n + 2      ...         n * n
---------------------------------------------------------------------------
s: n*gauss(k-1) + 1*k    n*gauss(k-1) + 1*k    ...    n*gauss(k-1) + n*k

Remember this sum 1 + 2 + ... + n = n*(n +1)/2. Let's call this as gauss(n))
How much candy have I distributed up until now? 1 + 2 + 3 + ... k * n = gauss(k * n)

If k rounds are complete, the the candies distributed is equal to (1+2+...+kn),
which is equal to (1+kn)kn/2. Then solve (1+k*n)kn/2 == c, for k.

Write it again:
n^2 * k^2 + n * k - 2*c <= 0 which yields
k <= (sqrt(1 + 8*c) - 1) / (2*n), k greatest.

I have k, let's take out our k distribution cycles of candy.
candies -= gauss(k * num_people);

(
  Simple Gauss
  const k = Math.sqrt(8*n + 1) / 2
  return Math.floor(k - 0.5);
)


Complexity
Time O(sqrt(candies))
Space O(N) for result

The number of given candies is i + 1, which is an increasing sequence.
The total number distributed candies is c * (c + 1) / 2 until it's bigger than candies.
So the time it takes is O(sqrt(candies))

todo
js math solution https://leetcode.com/problems/distribute-candies-to-people/discuss/327045/Javascript-O(n)-math-solution.-Beats-100-time.

*/

function gauss(n) {
  return Math.floor(n*(n+1)/2);
}

var distributeCandies = function(candies, num_people) {
  let people = new Array(num_people).fill(0);

  // calculate fully-filled layers
  let k = Math.floor((Math.sqrt(8*candies + 1) - 1) / (2 * num_people));
  candies -= gauss(k * num_people);

  for (let i = 0; i < num_people; i++) {
		people[i] += num_people * gauss(k - 1) + k * (i + 1);
  }

  // All that remains is the last remaining distribution cycle.
  let d = k * num_people + 1;
	let j = d;
	for (; candies - j >= 0; j++) {
		people[j - d] += j;
		candies -= j;
	}

	if (candies > 0) {
		people[j - d] += candies;
	}

	return people;
}

// tests
//console.log('distributeCandies', distributeCandies(7, 4)) // [1,2,3,1]
//console.log('distributeCandies', distributeCandies(10, 3)) // [5,2,3]
//console.log('distributeCandies', distributeCandies(28, 3)) // [12,7,9]?

export {
  distributeCandies,
  distributeCandiesUseLoop,
  distributeCandies1,
  distributeCandies2
}
