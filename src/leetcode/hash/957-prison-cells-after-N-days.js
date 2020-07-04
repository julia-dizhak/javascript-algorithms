/*
Leetcode
957 Prison Cells After N Days
medium

There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the
following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant,
then the cell becomes occupied. Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row
can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1
if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after
N days (and N such changes described above.)

Example 1:
Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]

Explanation:
The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

Example 2:
Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
Output: [0,0,1,1,1,1,1,0]

Note:
cells.length == 8
cells[i] is in {0, 1}
1 <= N <= 10^9
*/


/*
Approach Hash (Find a pattern)
Catch a cycle
Can use Map as well

Intuition
- First and last cell don't have two adjacent neighbors
- loop through an array
- and each next day I will use previous input
- need to have a lot of space
- fixed length of cells: first and last always fixed,6 indexes
- repeating pattern: I need to repeat a process N times, need to find what is repeated
- what is a block size of repetition

Example:
a -> b
b -> c
c -> a

Usually in these kind of questions, try to work out smaller examples and see for
yourself if there is any pattern etc. This is how you approach any problem in
real life.
I could easily work out the example where cell size is 4 and any sample day 0
If we take the cell dimension to be say, 4, and the initial day 0 = [0 1 0 1]
And if you've understood the above algorithm, you can work out for yourself that
the maximum size of the seen set will be only 2. How ? Work it out on a paper and
see it :

day 0 = [0 1 0 1]
day 1 = [0 1 1 0]
day 2 = [0 0 0 0]
day 3 = [0 1 1 0]  <- starts repeating
day 4 = [0 0 0 0]

Did you see a pattern? Day 1 == Day 3, And Day 2 == Day 4.
And how many of these did we save in our seen set ? Just 2 .
Day 1 and Day 2 because those were unseen earlier. After that they started repeating,
hence we don't save anything else after that.

for current task
N = N % 14 || 14

Time Complexity is O(1)
Actually it will be how many times we ran the loop to find a cycle

Space complexity
Hence the space complexity is O(1) i.e with increasing N, our hashset space
doesn't increase (it stays constant), hashet is bounded by the length of the cell
(and not by N)
*/
/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  if (cells === null || cells.length === 0 || N <=0) return cells;

  let hash = {}
  let cycle = 0;
  let hasCycle = false;

  for (let i = 0; i < N; i++) {
    const nextDayTransfrom = nextDay(cells);

    let key = nextDayTransfrom.toString()
    if (!hash[key]) {
      // store cells state
      hash[nextDayTransfrom] = true;
      cycle++;
    } else {
      hasCycle = true;
      break;
    }
    cells = nextDayTransfrom;
  }

  if (hasCycle) {
    N = N % cycle;
    for (let i = 0; i < N; i++) {
      cells = nextDay(cells)
    }
  }

  return cells;
};

function nextDay(cells) {
  let newPrison = new Array(cells.length).fill(0);
  for (let i = 1; i < cells.length - 1; i++) {
    if (cells[i-1] === cells[i+1]) {
      newPrison[i] = 1
    }
  }

  return newPrison;
}

// function nextDay1(cells) {
//   let newPrison = '';
//   for (let i = 1; i < cells.length - 1; i++) {
//     if (cells[i-1] === cells[i+1]) {
//       newPrison += '1'
//     } else {
//       newPrison += '0'
//     }
//   }

//   return newPrison;
// }

console.log('prisonAfterNDays', prisonAfterNDays([0,1,0,1,1,0,0,1], 15))

export {
  prisonAfterNDays
}
