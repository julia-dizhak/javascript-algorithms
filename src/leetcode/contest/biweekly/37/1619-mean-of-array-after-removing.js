/*
Contest leetcode
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

  return Number(average);
}

// concise version
var trimMean2 = function(arr) {
  const average = arr
    .sort((a,b) => a-b)
    .slice(arr.length * 0.05, arr.length * 0.95)
    .reduce((acc, val) => acc + val, 0) / (arr.length * 0.9)
  
  //console.log(typeof average.toFixed(5)); 
  //return Number(average.toFixed(5)); 
  return average;
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


//var trimMean4 = (arr) => arr.sort((a, b) => a - b).slice(arr.length * 0.05, arr.length * 0.95).reduce((acc, val) => acc + val, 0) / (arr.length * 0.9).toFixed(5);
var trimMean4 = (arr) => arr.sort((a, b) => a - b).slice(arr.length * 0.05, arr.length * 0.95).reduce((acc, val) => acc + val, 0) / (arr.length * 0.9).toFixed(5);

// console.log('trimMean', trimMean2([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))
// console.log('trimMean', trimMean2([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]))
// console.log('trimMean', trimMean2([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]))

export {
  trimMean, trimMean1,
  trimMean4,
  trimMean2
}