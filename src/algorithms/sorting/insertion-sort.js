function insertionSort(arr) {
  const len = arr.length;

  // can skip the first item = index 0, since any array of size 1 is trivially sorted
  for (let i = 1; i < len; i++) {
    const key = arr[i]; // or an element
    let j = i - 1;

    /*
      Move elements of arr[0..i-1], that are
      greater than key, to one position ahead
      of their current position
    */
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j = j - 1;
    }

    arr[j+1] = key;
  }

  return arr;
}

insertionSort([3, 1,2])

export { insertionSort, solution }

// ###  What will be the output of the following code?
// function myFunction(a) {
//   var b = 6;
//   return function(b) {
//   console.log(b, a)
//   }
//  }
//  var testFunction = myFunction(2)
//  testFunction(3)


// first bad version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version.
// bad 000000011111
// 1 2 3 4 5 6 7 8 9
//  G G G G G G B B B
// Time complexity : O(\log n)O(logn). The search space is halved each time, so the time complexity is O(\log n)O(logn).
// Space complexity : O(1)O(1).
// problem 278
function isBadVersion(n) {
  if (n == 4) {
    return true
  }
  return false
}

// linear scan
// public int firstBadVersion(int n) {
//   for (int i = 1; i < n; i++) {
//       if (isBadVersion(i)) {
//           return i;
//       }
//   }
//   return n;
// }


var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    //param {integer} n Total versions
    //debugger;
    //const len = n.length;
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((right-left)/2 + left)
      isBadVersion(mid) ? right = mid : left = mid + 1
    }

    console.log('left', left)
    return left

    // console.log('n', n)
    //   for (let i=0; i<n; i++) {
    //       if (isBadVersion(n[i]) === true) {
    //           return n[i];
    //       }
    //   }
  };
};
// use binary search?
var k = solution(isBadVersion);
k([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);



