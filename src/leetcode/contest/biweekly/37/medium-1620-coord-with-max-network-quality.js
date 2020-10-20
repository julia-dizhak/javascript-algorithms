/*
Contest leetcode
1620
medium

You are given an array of network towers towers and an integer radius, where 
towers[i] = [xi, yi, qi] denotes the ith network tower with location (xi, yi) 
and quality factor qi. All the coordinates are integral coordinates on the X-Y 
plane, and the distance between two coordinates is the Euclidean distance.

The integer radius denotes the maximum distance in which the tower is reachable. 
The tower is reachable if the distance is less than or equal to radius. Outside 
that distance, the signal becomes garbled, and the tower is not reachable.

The signal quality of the ith tower at a coordinate (x, y) is calculated with 
the formula ⌊qi / (1 + d)⌋, where d is the distance between the tower and the 
coordinate. The network quality at a coordinate is the sum of the signal qualities 
from all the reachable towers.

Return the integral coordinate where the network quality is maximum. If there are 
multiple coordinates with the same network quality, return the lexicographically 
minimum coordinate.

Note:
A coordinate (x1, y1) is lexicographically smaller than (x2, y2) if either x1 < x2 
or x1 == x2 and y1 < y2.
⌊val⌋ is the greatest integer less than or equal to val (the floor function).

Example 1
Input: towers = [[1,2,5],[2,1,7],[3,1,9]], radius = 2
Output: [2,1]
Explanation: 
At coordinate (2, 1) the total quality is 13
- Quality of 7 from (2, 1) results in ⌊7 / (1 + sqrt(0)⌋ = ⌊7⌋ = 7
- Quality of 5 from (1, 2) results in ⌊5 / (1 + sqrt(2)⌋ = ⌊2.07⌋ = 2
- Quality of 9 from (3, 1) results in ⌊9 / (1 + sqrt(1)⌋ = ⌊4.5⌋ = 4
No other coordinate has higher quality.

Example 2
Input: towers = [[23,11,21]], radius = 9
Output: [23,11]

Example 3:
Input: towers = [[1,2,13],[2,1,7],[0,1,9]], radius = 2
Output: [1,2]

Example 4:
Input: towers = [[2,1,9],[0,1,9]], radius = 2
Output: [0,1]
Explanation: Both (0, 1) and (2, 1) are optimal in terms of quality but (0, 1) 
is lexicograpically minimal.

Constraints:
1 <= towers.length <= 50
towers[i].length == 3
0 <= xi, yi, qi <= 50
1 <= radius <= 50

Hint
The constraints are small enough to consider every possible coordinate and 
calculate its quality.
*/

/*
Approach Greedy

Note In contest weak test cases to it passed the assuming one of the tower will 
have maximum signal but that is not real fact.

So from the problem Constraints we have to try all possible coordinates pair 
where and take the maximum signal quality one.

0 <= xi, yi, qi <= 50

or
Why are we only assuming tower coordinates will be our answer like.. why can't 
it be a point in between the shapes formed by connecting the towers?

time n^2
*/
/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate1 = function(towers, radius) {
  let max = 0;
  const n = towers.length;
  let res = [];
  
  for (let i = 0; i < n; i++) {
    let curr = towers[i];
    let sum = 0;

    for (let j = 0; j < n; j++) {
      let next = towers[j];
      let distance = Math.floor(Math.sqrt( (curr[0] - next[0])**2 + (curr[1] - next[1])**2 ));
      console.log('distance', distance);
      // todo
      if (distance <= radius) {
        // ⌊qi / (1 + d)⌋
        sum += Math.floor(next[2] / (1 + distance));
      }
    }
    console.log('sum', sum);
    if (sum > max) {
      max = sum;
      res = [curr[0], curr[1]];
    } 
  }

  return res;
};

// var bestCoordinate = function(towers, radius) {
//   let max = 0,
//     mx = 0,
//     my = 0;
//   const n = towers.length; 

//   for (let x = 0; x < 51; x++) {
//     for (let y = 0; y < 51; y++) {
//       let quality = 0;

//       for (let i = 0; i < n; i++) {
//         // if (i==j) continue
//         let xd = x - towers[i][0];
//         console.log('xd', xd);
//         //let distance = 
        
//       }     
      
//     }
    
//   }
// }

var bestCoordinate = function(towers, radius) {
  towers = towers.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);

  let max = 0;
  const n = towers.length; 
  let res = [];

  for (let i = 0; i < n; i++) {

    let quality = 0;
    for (let j = 0; j < n; j++) {
      // if (i==j) continue
      // let sum = (towers[i][0] - towers[j][0]) * (towers[i][0] - towers[j][0]) +
      //   ( (towers[i][1] - towers[j][1]) * (towers[i][1] - towers[j][1]) );
      // let distance =  Math.floor(Math.sqrt(sum)) 
      let distance = (towers[i][0] - towers[j][0]) * (towers[i][0] - towers[j][0]) +
        ( (towers[i][1] - towers[j][1]) * (towers[i][1] - towers[j][1]) ); 
      console.log('distance', distance);  
      if (distance <= radius*radius) {
        quality += Math.floor(towers[j][2] / (1 + Math.sqrt(distance)));
      }
    }
    console.log('quality', quality);
    
    if (quality > max) {
      max = quality;
      res[0] = towers[i][0]; 
      res[1] = towers[i][1];
    }
  }     
  
  return res;
}

console.log('bestCoordinate', bestCoordinate([[1,2,5],[2,1,7],[3,1,9]], 2));
console.log('bestCoordinate', bestCoordinate([[23,11,21]], 9));
// console.log('bestCoordinate', bestCoordinate([[1,2,13],[2,1,7],[0,1,9]], 2));
console.log('bestCoordinate', bestCoordinate([[2,1,9],[0,1,9]], 2));


export {
  bestCoordinate
}