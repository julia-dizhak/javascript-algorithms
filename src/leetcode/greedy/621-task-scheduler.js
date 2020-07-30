/*
Leetcode
621 Task Scheduler
medium

You are given a char array representing tasks CPU need to do. It contains capital
letters A to Z where each letter represents a different task. Tasks could be done
without the original order of the array. Each task is done in one unit of time.
For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period
between two same tasks (the same letter in the array), that is that there must
be at least n units of time between any two same tasks.

You need to return the least number of units of times that the CPU will take to
finish all the given tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation:
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.

Example 2:
Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.

Example 3:
Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation:
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

Constraints:
The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].
*/

/*
Approach Greedy

Intuition
The key is to find out how many idles do we need.
Let's first look at how to arrange them. it's not hard to figure out that we can
do a "greedy arrangement": always arrange task with most frequency first.
E.g. we have following tasks : 3 A, 2 B, 1 C. and we have n = 2. According to what
we have above, we should first arrange A, and then B and C. Imagine there are
"slots" and we need to arrange tasks by putting them into "slots". Then A should
be put into slot 0, 3, 6 since we need to have at least n = 2 other tasks between
two A. After A put into slots, it looks like this:

A ? ? A ? ? A
"?" is "empty" slots.

Now we can use the same way to arrange B and C. The finished schedule should look like this:
A B C A B # A
"#" is idle

Now we have a way to arrange tasks. But the problem only asks for number of CPU
intervals, so we don't need actually arrange them. Instead we only need to get
the total idles we need and the answer to problem is just number of idles + number of tasks.
Same example: 3 A, 2 B, 1 C, n = 2. After arranging A, we have:
A ? ? A ? ? A
We can see that A separated slots into (count(A) - 1) = 2 parts, each part has length n.
With the fact that A is the task with most frequency, it should need more idles
than any other tasks.

Calculating this is not hard, we first get number of parts separated by A:
partCount = count(A) - 1; then we can know number of empty slots:
emptySlots = partCount * n; we can also get how many tasks we have to put into those slots:
availableTasks = tasks.length - count(A).
Now if we have emptySlots > availableTasks which means we have not enough tasks
available to fill all empty slots, we must fill them with idles.
Thus we have idles = max(0, emptySlots - availableTasks);


Almost done. One special case: what if there are more than one task with most
frequency? OK, let's look at another example: 3 A 3 B 2 C 1 D, n = 3
Similarly we arrange A first:
A ? ? ? A ? ? ? A

Now it's time to arrange B, we find that we have to arrange B like this:
A B ? ? A B ? ? A B

we need to put every B right after each A. Let's look at this in another way,
think of sequence "A B" as a special task "X", then we got:
X ? ? X ? ? X
Comparing to what we have after arranging A:
A ? ? ? A ? ? ? A
The only changes are length of each parts (from 3 to 2) and available tasks.
By this we can get more general equations:
partCount = count(A) - 1
emptySlots = partCount * (n - (count of tasks with most frequency - 1))
availableTasks = tasks.length - count(A) * count of tasks with most frequency
idles = max(0, emptySlots - availableTasks)
result = tasks.length + idles

What if we have more than n tasks with most frequency and we got emptySlot negative?
Like 3A, 3B, 3C, 3D, 3E, n = 2. In this case seems like we can't put all B C S
inside slots since we only have n = 2.
Well partCount is actually the "minimum" length of each part required for
arranging A. You can always make the length of part longer.
E.g. 3A, 3B, 3C, 3D, 2E, n = 2.
You can always first arrange A, B, C, D as:
A B C D | A B C D | A B C D
in this case you have already met the "minimum" length requirement for each part
(n = 2), you can always put more tasks in each part if you like:
e.g. A B C D E | A B C D E | A B C D

emptySlots < 0 means you have already got enough tasks to fill in each part to
make arranged tasks valid. But as I said you can always put more tasks in each
part once you met the "minimum" requirement.

Complexity
To get count(A) and count of tasks with most frequency, we need to go through
inputs and calculate counts for each distinct char. This is O(n) time and O(26)
space since we only handle upper case letters.
All other operations are O(1) time O(1) space which give us total time complexity
of O(n) and space O(1)


similar solution only instead of map, we have array which will store occurrences of characters
var leastInterval = function(tasks, n) {

    let count = new Array(26).fill(0),
        max = 0,
        maxNum = 0;

    for(const c of tasks) {
        const index = c.charCodeAt(0) - 'A'.charCodeAt(0);

        if(++count[index] > max){
            max = count[index];
            maxNum = 1;
        } else if(count[index] === max) maxNum++;
    }

    return Math.max(tasks.length, (max - 1) * (n+1) + maxNum);
};
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// var leastInterval = function(tasks, n) {
//   let counter = new Array(26).fill(0);
//   let max = 0;
//   let maxCount = 0;

//   for (const task of tasks) {
//     //debugger
//     const index = task.charCodeAt(0) - 'A'.charCodeAt(0);

//     if (max === counter[task - 'A']) {
//       maxCount++;
//     } else if (max < counter[task - 'A']) {
//       max = counter[task - 'A'];
//       maxCount = 1;
//     }
//   }

//   let partCount = max - 1;
//   let partLength = n - (maxCount - 1);
//   let emptySlots = partCount * partLength;
//   let availableTasks = tasks.length - max * maxCount;
//   let idles = Math.max(0, emptySlots - availableTasks);
//   return tasks.length + idles;
//}

/*
Approach (the same) Greedy

cases: The result value can be calculated by determining the task(s) that occur(s)
most often.

case 1: [A B B C], n = 2 => [B A C B]

case 2: [A B B C C], n = 2 => [B C A B C]

case 3: [A B C C C], n = 2 => [C A _ C B _ C]

case 4: [A B B C], n = 3 => [B A C _ B]

We can start to see a pattern here, and thus, we can create a formula to determine the answer!
in short, the formula is ...
resultCount = (maxOccurrences - 1) * (n + 1) + (numMaxTasks);

Let's break this down ...

maxOccurrences - 1
As seen in case 3, we know that we need to multiply times maxOccurrences. We must
subtract 1 because we do not need to have any empty spaces or filling after the
last occurrence, at the end.

(n + 1)
We need to multiply times n+1 because there will always be n spaces in between,
which when multiplying, would not be including the actual task if we were to not add 1.

+maxNumTasks
This is to consider the case where there is more than 1 task that needs to be
appended at the end, such as in Case 2.

Edge cases
It's possible that there is more than enough "filler" tasks to complete.
Consider [A, B, C, C, D, E, F, G] where n = 2;

Using our formula, our answer would be 4. Clearly this isn't correct because t
here are more than 4 tasks in the starting array!
Thus, we can just return the length of the initial array.

*/
var leastIntervalUseHash = function(tasks, n) {
  let map = {};
  let maxVal = 0; // the max occurrences
  let maxValCount = 0; // the number of tasks that has the max occurrences

  for (const task of tasks) {
    map[task] = (map[task] || 0) + 1;
    let taskVal = map[task];

    // set our maxVal and number of maxVal tasks only if we have a new max
    if (taskVal > maxVal) {
      maxVal = taskVal;
      maxValCount = 1;
    } else if (taskVal === maxVal) {
      // otherwise, increment number of maxVal tasks
      maxValCount++;
    }
  }
  console.log('map', map)

  // our formula, handle the edge case
  return Math.max(tasks.length, (maxVal - 1) * (n+1) + maxValCount);
}

//console.log('leastIntervalUseHash', leastIntervalUseHash(["A","A","A","B","B","B"], 2))
//console.log('leastIntervalUseHash', leastIntervalUseHash(["A","B","B","C","C"], 2))
console.log('leastIntervalUseHash', leastIntervalUseHash(["A","B","C","D","E","F","G"], 2))

export {
  //leastInterval,
  leastIntervalUseHash
}
