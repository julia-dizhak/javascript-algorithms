/*
Leetcode Biweekly contest 31

rating 6510 / 8677

solution
return (high - low) // 2 + (low % 2 or high % 2)

problem 2
https://leetcode.com/contest/biweekly-contest-31/problems/number-of-sub-arrays-with-odd-sum/
https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/discuss/754751/Javascript-Python3-C%2B%2B-count-of-01
*/

// https://www.geeksforgeeks.org/generate-an-array-in-which-count-of-even-and-odd-sum-sub-arrays-are-e-and-o-respectively/
// count odd numbers
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  let res = []
  var arr = [];

  for (var i = low; i <= high; i++) {
    arr.push(i);
  }
  console.log('arr', arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      res.push(arr[i])
    }
  }

  return res.length
};

var countOdds2 = function(low, high) {
  //debugger
  let N = Math.floor((high - low) / 2);

  // if either R or L is odd
  if (high % 2 !== 0 || low % 2 !== 0) N++;
  return N;
}
console.log('countOdds22', countOdds2(3,7))
console.log('countOdds22', countOdds2(21,22))

//console.log('countOdds', countOdds(1,3))
//console.log('countOdds', countOdds(8,10))

// function countOdds1(x, y) {
//   //debugger
//   let numbers = [];

//   if (x < y) {
//     for (let i = x ; i <= y; i++) {
//       if (i % 2 === 1) {
//         numbers.push(i);
//       }
//     }
//   }

//   return numbers;
// }

function countOdds1(low, high) {
  let numbers = [];

  if (low > high) {
    for (let i = high; i <= low; i++) {
      if (i % 2 === 1) {
        numbers.push(i);
      }
    }
  } else {
    for (let i = low; i <= high; i++) {
      if (i % 2 === 1) {
        numbers.push(i);
      }
    }
  }

  return numbers.length;
}
// console.log('countOdds1', countOdds1(3,7))
// console.log('countOdds1', countOdds1(1,3))

/*
Given an array of integers arr. Return the number of sub-arrays with odd sum.

As the answer may grow large, the answer must be computed modulo 10^9 + 7.

Input: arr = [1,3,5]
Output: 4
Explanation: All sub-arrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
// all subarrays time limit exceed
/*
 */
// https://www.quora.com/How-can-we-count-the-number-of-subarrays-whose-sum-is-ODD
// todo check https://leetcode.com/problems/count-number-of-nice-subarrays/
// kadans to check
var numOfSubarrays = function(arr) {
  const n = arr.length;
  let res = []

  for (let left = 0; left < n; left++) {
    for (let right = left; right < n; right++) {

      let sum = 0;
      for (let k = left; k <= right; k++) {
        sum += arr[k];
        //if (sum % 2 === 1) res.push(sum)
      }

      if (sum % 2 === 1) res.push(sum)
      //res.push(sum)
    }
  }

  // let odd = []
  // for (let i = 0; i < res.length; i++) {
  //   if (res[i] % 2 === 1) odd.push(res[i])
  // }

  console.log('res', res)
  //console.log('odd', odd)
  return res;

};
console.log('numOfSubarrays rrr', numOfSubarrays([1,3,5]));

// kadans 1
// todo https://www.quora.com/Can-we-find-the-sum-of-all-sub-arrays-of-an-integer-array-in-O-n-time
var numOfSubarrays2 = function(arr) {
  if(arr.length==1) return arr[0];
	var cur = arr[0];
	var ans=cur;
	for(var i=1;i<arr.length;i++)
		{
			cur = Math.max(cur + arr[i], arr[i]);
			ans=Math.max(ans,cur);
		}
	return ans;

};

var numOfSubarrays1 = function(arr) {
  let result = [];

  // computing sum of subarray using formula
  for (let i=0; i< arr.length; i++) {
    let sum = (arr[i] * (i+1) * (arr.length - i))
    result.push(sum)
    //result += (arr[i] * (i+1) * (arr.length-i));
  }


  // return all subarray sum
  return result ;
}

// https://www.geeksforgeeks.org/number-of-subarrays-with-odd-sum/

var numOfSubarrays3 = function(arr) {
  let temp = [1,0];
  let res = 0, val = 0;

  for (let i = 0; i < arr.length; i++) {
    //debugger
    // 2 is added to handle negative numbers
    val = ((val + arr[i]) % 2 + 2) % 2;

    // Increment even/odd count
    temp[val]++;
  }

  // An odd can be formed by even-odd pair
  res = (temp[0] * temp[1]);

  return res;
}

console.log('numOfSubarrays3 rrr', numOfSubarrays3([1,3,5]));

 export {
  countOdds,
  numOfSubarrays
}
