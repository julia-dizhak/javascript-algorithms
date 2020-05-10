/**
 * Leetcode
 * 997 Find the Town Judge
 * easy
 *
 * In a town, there are N people labelled from 1 to N.
 * There is a rumor that one of these people is secretly the town judge.
 * If the town judge exists, then:
 * 1 The town judge trusts nobody.
 * 2 Everybody (except for the town judge) trusts the town judge.
 * 3 There is exactly one person that satisfies properties 1 and 2.
 *
 * You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
 * If the town judge exists and can be identified, return the label of the town judge.
 * Otherwise, return -1.
 *
 * Note
 * 1 <= N <= 1000
 * trust.length <= 10000
 * trust[i] are all different
 * trust[i][0] != trust[i][1]
 * 1 <= trust[i][0], trust[i][1] <= N
 *
**/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
*/

/**
 * Approach 1: One array
*/
var findJudge = function(N, trust) {
  // initialize array with 1..N
  // N + 1, so count is easier
  let counts = Array(N+1).fill(0);

  // iterate trough N people
  for (const man of trust) {
    const [i, j] = man;
    debugger
    // if the person trusts somebody, then it does not meet requirement 1
    // once you trust someone you basically out
    counts[i] -= 1;
    counts[j] += 1; // count how much people trust you
  }

  // if N-1 exists, then its the judge since the judge trusts no one except themselves
  // and everyone else trusts the judge, then its N-1
  for (let i = 1; i < counts.length; i++) {
    if (counts[i] === N -1) {
      return i
    }
  }

  return -1;
}

export { findJudge }
