/*
Biweekly 37 17.10

How many problem resolved?
Vasyl helped with 1 problem
4204 / 8250

toFixed(5); // todo move
*/


/*
1 problem

1619. Mean of Array After Removing Some Elements
easy
Array

Given an integer array arr, return the mean of the remaining integers after 
removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.

Hint 1
Sort the given array.

Hint 2
Remove the first and last 5% of the sorted array.
*/

function test(params) {
  return true;
}

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) { 
  arr =  arr.sort((a,b) => a-b);
  const n = arr.length;
  const minIndex = n * 0.05,
    maxIndex = n * 0.95;

  const resultArr = arr.slice(minIndex, maxIndex);
  const sum = resultArr.reduce((acc, val) => acc + val, 0);

  let average = (sum / resultArr.length).toFixed(5); 

  return average;
}

// concise version
var trimMean2 = function(arr) {
  const average = arr
    .sort((a,b) => a-b)
    .slice(arr.length * 0.05, arr.length * 0.95)
    .reduce((acc, val) => acc + val, 0) / (arr.length * 0.9)
  return average.toFixed(5);
};

const trimMean1 = arr => {
  const percNum = Math.round(arr.length*0.05);
  let sum = 0, 
    count = 0;
  
    arr = arr.sort((a,b) => a - b);
  for (let i = percNum; i < arr.length - percNum; i++){
    sum += arr[i];
    count++;
  }
  return sum/count;
};
// console.log('trimMean', trimMean2([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))
// console.log('trimMean', trimMean2([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]))
// console.log('trimMean', trimMean2([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]))


/*
Euclidean distance.
integral coordinates
*/

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
  //const coord = towers[0].slice(0,2);
  const coord = towers[1].slice(0,2);
  const [x,y] = coord;
  console.log('x', x);
  console.log('y', x);

  let maxSum = 0;

  for (let i = 0; i < towers.length; i++) {
    let sum = 0;
    const coord = towers[i].slice(0,2);
    console.log('coord', coord);
    const [x,y] = coord;

    for (let i = 0; i < towers.length; i++) {
      const coordO = towers[i].slice(0,2);
      console.log('coordO', coordO);
      const [a,b] = coordO;
      const qO = towers[i][towers.length - 1];
      const dO = (x-a)*(x-a) + (y-b)*(y-b);
      const d = Math.floor(Math.sqrt(dO));
      const q = Math.floor(qO / (1 + d));
      sum += q
    }
    console.log('sum', sum);
    maxSum = Math.max(maxSum, sum)
    
  }

  // for (const tower of towers) {

  //   const coordinates = tower.splice(0,2);
  //   console.log('coordinates', coordinates);


  //   const [a,b] = coordinates;
  //   const qO = tower[tower.length - 1];
  //   console.log('qO', qO)
  //   const dQ = (x-a)*(x-a) + (y-b)*(y-b);
  //   const d = Math.floor(Math.sqrt(dQ));
  //   console.log('d', d); 
  //   const q = Math.floor(qO / (1 + d))
  //   console.log('q', q);
  //   sum += q
  // }

  // console.log('sum', sum);
};
console.log('bestCoordinate', bestCoordinate([[1,2,5],[2,1,7],[3,1,9]], 2));

export {
  trimMean, trimMean1,
  test
}