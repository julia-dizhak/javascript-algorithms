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
  Approach: One array

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
  We loop over the trust list once. The cost of doing this is O(E).
  We then loop over the people. The cost of doing this is O(N).
  O(max(N, E) = O(N+E). After all, we don't know whether E or N is the bigger one, right?
  However, remember how we terminate early if E < N - 1?
  Tis means that in the best case, the time complexity is O(1).
  And in the worst case, we know that E ≥ N - 1. For the purpose of big-oh notation, we ignore the constant of 1.
  Therefore, in the worst case, E has to be bigger, and so we can simply drop the N, leaving O(E).

  So time complexity is O(E).

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

/*
  Approach: Two arrays

  Intuition
  The trust relationships form a graph. Each trust pair, [a, b] represents a directed edge going from a to b.

  We can define the town judge in terms of indegree and outdegree.

  In graph theory, we say the outdegree of a vertex (person) is the number of directed edges going out of it.
  For this graph, the outdegree of the vertex represents the number of other people that person trusts.

  Likewise, we say that the indegree of a vertex (person) is the number of directed edges going into it.
  So here, it represents the number of people trusted by that person.

  The town judge has an outdegree of 0 and an indegree of N - 1 because they trust nobody, and everybody trusts them (except themselves).

  Therefore, this problem simplifies to calculating the indegree and outdegree for each person and then checking whether or not any of them meet the criteria of the town judge.
  We can calculate the indegrees and outdegrees for everybody, using a single loop over the input trust array.
  We'll write the results into two arrays.

  Complexity analysis
  Time complexity is O(E) and the argument about relationship between N and E still applies.

  Space complexity is O(N)
  We allocated 2 arrays; one for the indegrees and the other for the outdegrees.
  Each was of length N + 1. Because in big-oh notation we drop constants, this leaves us with O(N).
*/
var findJudgeTwoArrays = function(N, trust) {
  if (trust.length < N - 1) {
    return -1;
  }

  let outdegree = Array(N+1).fill(0);
  let indegree = Array(N+1).fill(0);

  for (const [i,j] of trust) {
    outdegree[i]++;
    indegree[j]++;
  }

  for (let i = 1; i <=N; i++) {
    // The town judge has an outdegree of 0 and an indegree of N - 1 because they trust nobody, and everybody trusts them (except themselves).
    if (outdegree[i] === 0 && indegree[i] === N-1) {
      return i
    }
  }

  return -1;
}


export { findJudge, findJudgeTwoArrays }
