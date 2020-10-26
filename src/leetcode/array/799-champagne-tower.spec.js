/*
Leetcode
799 Champagne tower
medium
(was in contest)

We stack glasses in a pyramid, where the first row has 1 glass, the second row 
has 2 glasses, and so on until the 100th row. Each glass holds one cup (250ml) 
of champagne.

Then, some champagne is poured in the first glass at the top.  When the topmost 
glass is full, any excess liquid poured will fall equally to the glass immediately 
to the left and right of it.  When those glasses become full, any excess champagne 
will fall equally to the left and right of those glasses, and so on.  
(A glass at the bottom row has its excess champagne fall on the floor.)

For example, after one cup of champagne is poured, the top most glass is full.  
After two cups of champagne are poured, the two glasses on the second row are 
half full.  After three cups of champagne are poured, those two cups become 
full - there are 3 full glasses total now.  After four cups of champagne are 
poured, the third row has the middle glass half full, and the two outside 
glasses are a quarter full, as pictured below.

Now after pouring some non-negative integer cups of champagne, return how full 
the jth glass in the ith row is (both i and j are 0-indexed.)

Example 1:
Input: poured = 1, query_row = 1, query_glass = 1
Output: 0.00000
Explanation: We poured 1 cup of champagne to the top glass of the tower 
(which is indexed as (0, 0)). There will be no excess liquid so all the glasses 
under the top glass will remain empty.


Example 2:
Input: poured = 2, query_row = 1, query_glass = 1
Output: 0.50000
Explanation: We poured 2 cups of champagne to the top glass of the tower (which 
is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as 
(1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and 
each will get half cup of champagne.

Example 3:
Input: poured = 100000009, query_row = 33, query_glass = 17
Output: 1.00000

Constraints:
0 <= poured <= 109
0 <= query_glass <= query_row < 100
*/

/*
Approach Simulation

Intuition
Instead of keeping track of how much champagne should end up in a glass, keep track 
of the total amount of champagne that flows through a glass. For example, if 
poured = 10 cups are poured at the top, then the total flow-through of the top 
glass is 10; the total flow-through of each glass in the second row is 4.5, and 
so on.

Algorithm

In general, if a glass has flow-through X, then Q = (X - 1.0) / 2.0 quantity of 
champagne will equally flow left and right. We can simulate the entire pour for 
100 rows of glasses. A glass at (r, c) will have excess champagne flow towards 
(r+1, c) and (r+1, c+1).

x - 1 / 2

Complexity Analysis

Time Complexity: O(R^2), where R is the number of rows. As this is fixed, we can 
consider this complexity to be O(1).

Space Complexity: O(R^2), or O(1) by the reasoning above.
*/

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  // build a two dimension array based on row glass
  let flow_through = [];
  flow_through[0] = poured;

  for (let row = 0; row <= query_row; row++) {
    flow_through[row] = new Array(row + 1).fill(0);
    console.log('flow_through', flow_through);

    for( let glass = 0; glass <= row; glass++ ) {
      if (glass <= row -1 && flow_through[row-1][glass] > 1) {
        flow_through[row][glass] += (flow_through[row-1][glass] - 1)/2;
      }
  
      if (glass-1 >= 0 && flow_through[row-1][glass-1] > 1 ) {
        flow_through[row][glass] += (flow_through[row-1][glass-1] - 1)/2;
      }    
    }   
  };

  return flow_through[query_row][query_glass] > 1 ? 1: flow_through[query_row][query_glass];
};

// var champagneTower = function(poured, query_row, query_glass) {
//   //build a two dimension array based on row glass
//   let flow_through = [];
//   flow_through[0] = [poured];

//   for( let row=1; row <=query_row; row++) {
//       flow_through[row] = new Array(row+1).fill(0);
//       for( let glass=0; glass <= row; glass++ ) {
//           if(glass <= row -1 && flow_through[row-1][glass] > 1)
//               flow_through[row][glass] +=  (flow_through[row-1][glass] -1)/2;
//           if(glass-1 >= 0 && flow_through[row-1][glass-1] > 1 ) {
//               flow_through[row][glass] +=  (flow_through[row-1][glass-1] -1)/2;
//           }
              
//       };
//   }
  
//   return flow_through[query_row][query_glass] > 1? 1: flow_through[query_row][query_glass];
// };

console.log('champagneTower', champagneTower(1, 1, 1));
console.log('champagneTower', champagneTower(2, 1, 1));
//console.log('champagneTower', champagneTower(100000009, 33, 17));

export {
  champagneTower

}
