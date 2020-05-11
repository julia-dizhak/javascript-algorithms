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
 * Can There Be More Than One Town Judge?
 * In the problem description, we're told that iff there is a town judge, there'll only be one town judge.
 * It's likely that not all interviewers would tell you directly that there can only be one town judge.
 * If you asked them whether or not there could be more than one town judge, they might ask you if there could be.
 *
 * And the answer is... it's impossible!
 * If there were two town judges, then they would have to trust each other,
 * otherwise we'd have a town judge not trusted by everybody.
 * But this doesn't work, because town judges aren't supposed to trust anybody.
 * Therefore, we know there can be at most one town judge.
 *
**/

/*
  Approach 1: One array

  We can build a single Array with the result of indegree - outdegree for each person.
  In other words, we'll +1 to their "score" for each person they are trusted by,
  and -1 from their "score" for each person they trust.
  Therefore, fpr a person to maximize their "score", they should be trusted by as many people as possible,
  and trust as few people as possible.

  The maximum indegree in N-1. This represents everybody trusting the person (except for themselves, they cannot trust themselves).
  The minimum indegree is 0. This represents not trusting anybody.
  Therefore, the maximum value for indegree - outdegree is (N - 1) - 0 = N - 1.
  These values also happen to be definition of the town judge.

  The town judge is the only person who could possible have indegree - outdegree equal to N - 1

  Complexity analysis
  Recall that N is number of people, and E is the number of edges (trusts relationships)
  Time complexity is O(E). We need to loop through the E edges in trust,
  and the argument about relationship between N and E still applies

  Space complexity: O(N) - allocating an array of length N
*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
*/
var findJudge = function(N, trust) {
  if (trust.length < N-1) {
    return -1
  }

  // initialize array with 1..N
  // N + 1, so count is easier
  let trustScores = Array(N+1).fill(0);

  // iterate trough N people
  for (const relation of trust) {
    const [i, j] = relation;

    // if the person trusts somebody, then it does not meet requirement 1 => once you trust someone you basically out
    // each person loses 1 point for each person the y trust
    trustScores[i] -= 1;

    // count how much people trust you
    // each person gains 1 point for each person they are trusted by
    trustScores[j] += 1;
  }

  // if N-1 exists, then its the judge since the judge trusts no one except themselves
  // and everyone else trusts the judge, then its N-1
  for (let i = 1; i < trustScores.length; i++) {
    if (trustScores[i] === N -1) {
      return i
    }
  }

  return -1;
}

export { findJudge }
