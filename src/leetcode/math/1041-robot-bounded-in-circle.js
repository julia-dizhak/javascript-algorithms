/*
Leetcode
1041 Robot bounded in circle
medium

On an infinite plane, a robot initially stands at (0, 0) and faces north. The 
robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the 
robot never leaves the circle.

Example 1:
Input: "GGLLGG"
Output: true
Explanation: 
The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 
centered at the origin.

Example 2:
Input: "GG"
Output: false
Explanation: 
The robot moves north indefinitely.

Example 3:
Input: "GL"
Output: true
Explanation: 
The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

Note:
1 <= instructions.length <= 100
instructions[i] is in {'G', 'L', 'R'}
*/

import { helperVariant1 } from "../../ds/string-manipulation/reverse-a-string";

/*
Approach Math

Important: repeated infinite times

Examples:
1 'GR' or 'GL' -> true
      _
    | _ |
      
2 'GG' -> false
  |
  |
Direction explanation
dx and dy refer to the robot's direction, not its coordinates. 

If the robot faces right (clockwise 90 degree) after executing the instructions once,
the direction sequence of executing the instructions repeatedly will be 
up -> right -> down -> left -> up
The resulting move is [dx, dy] + [dy, -dx] + [-dx, -dy] + [-dy, dx] = [0, 0] 
(back to the original starting point)

All other possible direction sequences:
up -> left -> down -> right -> up. The resulting move is 
[dx, dy] + [-dy, dx] + [-dx, -dy] + [dy, -dx] = [0, 0]
up -> down -> up. The resulting move is [dx, dy] + [-dx, -dy] = [0, 0]
up -> up. The resulting move is [dx, dy]

Let's say the robot starts with facing up. It moves [dx, dy] by executing the 
instructions once.
If the robot starts with facing
right, it moves [dy, -dx];
left, it moves [-dy, dx];
down, it moves [-dx, -dy]

If robot is facing up --> [dx, dy] = [0,1] --> Turning to the right --> robot is 
now facing right --> [1,0]

If robot is facing right--> [dx,dy] = [1,0] --> Turning right --> robot is now 
facing down --> [dx,dy] = [0,-1]

If robot is facing down --> [dx,dy] = [0,-1] --> Turning right --> robot is 
facing left --> [dx,dy] = [-1,0]

If robot is facing down --> [dx,dy] = [-1,0] --> Turning right --> robot is now 
facing up --> [dx,dy] = [0,1]

I think it's just looking at these numbers and making a relationship between the initial and final directions; the numbers themselves intuitively don't really make sense to me, but they just happen to work because there are so few "test cases".


What is the thought process to say i = (i + 1) % 4 will turn right AND 
i = (i + 3) % 4 will turn left? Why increment right by 1 and left by 3? 
Why is the modulus 4 and some arbitrary number ?

To answer your question about the modulus being 4, it's because that is the 
number of entries in the directions array. You're constraining the resulting 
index by taking the modulus of the length to make sure it's 0-3.
Turn right once = Turn left 3 times, 
Turn left once = Turn right 3 times

time is O(n)
space is O(1)
*/
// todo I don't really understand this solution
var isRobotBounded = function(instructions) {
  let [x,y] = [0,0];
  let directions = [[0,1], [1, 0], [0,-1], [-1, 0]];
  let i = 0;

  for (let j = 0; j < instructions.length; j++) {
    if (instructions.charAt(j) === 'R') {
      i = (i + 1) % 4;
    }
    else if (instructions.charAt(j) === 'L') {
      i = (i + 3) % 4;
    } else {
      x += directions[i][0];
      y += directions[i][1];
    } 
  }
  return x === 0 && y === 0 || i > 0;
}

/*
Approach Math

the key point is repeated infinite times

Intuition

In order for the robot to stay within a circle, you need to move in a cycle. 
The only way you move in a cycle is if you end where you start (the origin at (0, 0)).

position + direction
The minimum number of instructions you need to repeat is 4 in order to figure 
out if you're in a cycle.

For example, 
-if each instruction only rotates 90 degrees, you need to repeat 
the instructions 4 times to possibly end where you start.

-If each instruction rotates 180 degrees, you need to repeat the instructions 2 
times to possibly end where you start.

-If each instruction rotates 270 degrees (-90 degrees), you need to repeat the 
instruction 4 times to possibly end where you start.

Time Complexity: O(n) (because k is constant)
Space complexity: O(1)
*/
var isRobotBoundedUseMath = function(instructions) {
  let k = 4;
  let [x,y] = [0,0];
  // initial direction of travel is north 
  let [dx, dy] = [0,1];

  // at least 4 times to repeat
  while (k--) {
    for (let i = 0; i < instructions.length; i++) {
      if ( instructions[i] === 'G') {
        x += dx;
        y += dy;
      } else if (instructions[i] === 'L') {
        [x, y] = [-y, x]; // rotation rule == transform
      } else {
        // R direction
        [x, y] = [y, -x];
      }
    }
  }
  return x === 0 && y === 0 ; 
};

/*
todo
problem robot return to origin
https://www.youtube.com/watch?v=f7Zd8hEbCz0
*/

// test
//console.log('isRobotBounded', isRobotBounded('GG'));
//console.log('isRobotBounded', isRobotBounded('GL'));
//console.log('isRobotBounded', isRobotBoundedUseMath('GLR'));
//console.log('isRobotBounded', isRobotBoundedUseMath('GGLLGG'));


export {
  isRobotBoundedUseMath,
  isRobotBounded
}