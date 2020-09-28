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

  return result;
}

//console.log(getAllSubstr('some'));

/*
Get all subarrays of size K

Approach Brute force

example [1,12,-5,-6,50,3], k=4
1 12 -5 -6
12,-5,-6,50,
-5 -6 50 3
*/
function findAllSubarraysOfSize(nums, K) {
  const n = nums.length;
  if (n === 0) return [];
  let res = [];
  for (let i = 0; i < n - K + 1; i++) {
    let subarray = [];
    for (let j = i; j < i + K; j++) {
      subarray.push(nums[j]);
    }
    console.log('subarray', subarray);
    res.push(subarray)
  }
  console.log('res', res)
  return res;
}
//console.log('findAllSubarrays', findAllSubarraysOfSize([1,12,-5,4], 2));

export {
  getAllSubstr,
  getAllSubstr1
}
