/**
 * Leetcode
 * Number Jewels in stones
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
var numJewelsInStones = function(J, S) {
  let count = 0;
  const jewels = J.split('');
  const stones = S.split('');
  const stonesObj = {}

  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    stonesObj[stone] = stonesObj[stone] ? stonesObj[stone] + 1 : 1
  }

  for (let j = 0; j < jewels.length; j++) {
    const jewel = jewels[j];
    if (stonesObj[jewel]) {
      count = count + stonesObj[jewel]
    }
  }

  // console.log('stonesObj', stonesObj)
  // console.log('count', count);
  return count;
};

export { numJewelsInStones }
