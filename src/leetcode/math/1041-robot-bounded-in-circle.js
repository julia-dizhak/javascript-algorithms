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

Im the real word, you could stop the algo if you have repeated the instructions 2x and it ends on (0,0), but here it is still O(N).
Time is O(n)
space is O(1)

Time Complexity: O(n) [ where n is the instructions length * 4]
Space complexity: O(1)

...
Any return to (0,0) is going to imply a loop, so you might not need to try the instructions 4 times. I implemented this.
Also, I used a dx, dy pair to keep track of direction; then, at each "Go" step x+=dx and y+=dy. It's easy enough to apply a rotation directly to the dx and dy.

...
There are only two scenarios where the robot can come back to its original location:

1 the robot is already back to its origin by the end of the string traversal, and

2 the robot is away from the origin, but heading to a direction different from 
its initial direction. For example, if the robot is facing left by the end of the 
first string traversal, after three other traversals of left->left->left, it is back to 
the origin. 
A second example is that if the robot is facing down by the end of the 
first string traversal, it only takes another traversal for it to get back to the origin.

...
Let dx, dy be directions of our robot and x,y be its coordinates. Then using linear algepra we can say that if we rotate to the left, then dx, dy = -dy, dx, similar if we rotate to the right. So, now we can easily follow the place of our robot. How to understand if his path will be bounded by some circle? We need to understand if he is going to loop. There are 3 possible options where path will be bounded.



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
 Don't understand your question. Turn right once = Turn left 3 times, Turn 
 left once = Turn right 3 times




*/
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
robot return to origin
https://www.youtube.com/watch?v=f7Zd8hEbCz0
*/


export {

}