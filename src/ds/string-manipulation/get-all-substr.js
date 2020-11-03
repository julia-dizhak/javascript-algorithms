/*
Get all substrings of string of all 
or Get all subarrays of array

Time is O(n^2)
space is O(1) don't use any additional DS for that

*/

function getAllSubstr(str) {
  const n = str.length;
  if (n === 1) return str;

  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j++) {
      result.push(str.slice(i,j))
    }
  }
  return result;
}
//console.log(getAllSubstr('some'));

// doesn't work return '', 'a', ''
function getAllSubstr1(str) {
  const n = str.length;
  if (n === 1) return str;

  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i; j <= n; j++) {
      result.push(str.slice(i,j))
    }
  }

  //console.log('result', result);
  return result;
}

//console.log(getAllSubstr1('some'));

/*
Get All subarrays for [1,2,3]
are [[1], [2], [3], [1,2], [2,3], [1,2,3]]
*/
function getAllSubarrays(arr) {
  const n = arr.length;
  if (n === 1) return arr;

  let res = [];

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j++) {
      res.push(arr.slice(i,j));
    }
  }
  
  //console.log('res', res);
  return res;
}

// tests
//console.log('getAllSubarrays', getAllSubarrays([1,2,3]));


/*
Given an array consisting of n integers, find the all contiguous subarray of given 
length k 

Approach Brute force
easy example input = ([1,2], 2), answer is only [1,2]
             input = ([1,2], 1), answer is [1], [2]

for example [1,12,-5,-6,50,3], k=4
1 12 -5 -6
12,-5,-6,50,
-5 -6 50 3

time is O(n^2)
*/
function findAllSubarraysOfSize(nums, K) {
  const n = nums.length;
  if (n === 0) return [];

  let res = [];
  for (let i = 0; i < n - K + 1; i++) {
    let subArr = []
    for (let j = i; j < i + K; j++) {
      subArr.push(nums[j]);
    }
    res.push(subArr);
  }
  //console.log('res', res)
  return res;
}

// tests
//console.log('findAllSubarrays', findAllSubarraysOfSize([1,12,-5,4], 2));
// console.log('findAllSubarrays', findAllSubarraysOfSize([1,2], 2));
// console.log('findAllSubarrays', findAllSubarraysOfSize([1,2], 1));

export {
  getAllSubstr,
  getAllSubstr1,
  getAllSubarrays,
  findAllSubarraysOfSize
}
