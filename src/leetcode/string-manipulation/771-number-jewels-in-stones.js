/**
 * Leetcode
 * 771 Number Jewels in stones
 * Easy
 *
 * You're given strings J representing the types of stones that are jewels,
 * and S representing the stones you have.
 * Each character in S is a type of stone you have.
 * You want to know how many of the stones you have are also jewels.
 *
 * The letters in J are guaranteed distinct,
 * and all characters in J and S are letters.
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * Hint:
 * For each stone, check if it is a jewel.
 */

/**
 * Approach 1: Brute force
 *
 * Time complexity: O(J.length * S.length)
 * Space complexity O(1) additional space complexity in Python.
 * In Java, this can be O(J.length∗S.length)) because of the creation of new arrays.
 */
var numJewelsInStonesBruteForce = function(J,S) {
  let count = 0;
  for (let i = 0; i < S.length; i++) { // for each stone
    for (let j = 0; j < J.length; j++) { // for each jewel
      if (J.charAt(j) === S.charAt(i)) { // if the stone is a jewel...
        count++;
        break; // stop searching whether this stone 's' is a jewel
      }
    }
  }
  return count;
}

/**
 * Approach 2 hash set
 *
 * Time Complexity: O(J.length + S.length)).
 * The O(J.length) part comes from creating J.
 * O(S.length) part comes from searching S.
 *
 * Space Complexity: O(S.length)
 */
 var numJewelsInStones = function(J, S) {
  let count = 0;
  if ((S.length || J.length) === 0) {
    count = 0
  }

  const jewels = J.split('');
  const stones = S.split('');
  const hash = {}

  for (let i = 0; i < S.length; i++) {
    const stone = stones[i];
    hash[stone] = hash[stone] ? hash[stone] + 1 : 1
  }

  for (let j = 0; j < J.length; j++) {
    const jewel = jewels[j];
    if (hash[jewel]) {
      count = count + hash[jewel]
    }
  }

  return count;
};

var numJewelsInStonesUseForIn = function(J, S) {
  let hash = {};
  let count = 0;

  for (let j in J) {
    hash[J[j]] = j
  }

  for (let i in S) {
    if (hash[S[i]]) {
      count++
    }
  }
  return count
};

// use includes
var numJewelsInStonesUseIncludes = function(J, S) {
  if (!J || !S) {
    return 0
  }

  let count = 0;
  for (const char of S) {
    if (J.includes(char)) count++
  }

  return count;
}

// use indexOf method
// Actually, due to indexOf being a loop under the hood,
// this is quadratic (O(n2)) time complexity = O(J.length * S.length), when it could be linear O(n)
var numJewelsInStonesUseIndexOf = function(J, S) {
  if (!J || !S) {
    return 0
  }

  let result = 0;
  for (let i = 0; i < S.length; i++) {
   if ( J.indexOf(S.charAt(i)) !== -1 ) result++
  }

  return result;
}

// use filter
var numJewelsInStonesUseFilter = function(J, S) {
  return [...S].filter((char) => J.indexOf(char) > -1 ).length
}

// reduce and set
// This is O(S) space and time - could be taken down to O(J) space by normal iteration.
const numJewelsInStonesUseSet = (J, S) => {
  const jewels = new Set(J);
  return S.split('').reduce((res, s) => res + jewels.has(s), 0);
};

const numJewelsInStonesUseReduce = (J, S) => {
  const set = new Set(J);
  return S.split('').reduce(
    (count, curr) => (set.has(curr) ? ++count : count),
    0
  );
};

export {
  numJewelsInStones,
  numJewelsInStonesBruteForce,
  numJewelsInStonesUseForIn,
  numJewelsInStonesUseIncludes,
  numJewelsInStonesUseIndexOf,
  numJewelsInStonesUseFilter,
  numJewelsInStonesUseSet,
  numJewelsInStonesUseReduce
}
