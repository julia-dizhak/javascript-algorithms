/*
Given two sorted arrays, merge them into one array that is sorted
*/

/*
Solution Using the spread operator

Time complexity
The time complexity for this solution will be O(nlogn) since we are using the 
sort() function
*/
function mergeArrays1(arr1, arr2) {
  return [...arr1, ...arr2].sort((a,b) => a-b);
}
//console.log(mergeArrays1([4,5,6],[-2,-1,0,7]))

/*
Solution Iterative + creating a new array

Traverse both arrays and insert smaller value from arr1 or arr2
into result array and then increment that array index.
If an array is completely traversed, while other one is left then just
copy all the remaining elements into result array.

Time complexity
The time complexity for this algorithm is O(n+m), where nn and mm are the 
lengths of arr1 and arr2, respectively. This is because both the arrays are 
iterated over once.
*/

function mergeArrays(arr1, arr2) {
  const n1 = arr1.length, n2 = arr2.length;
  let merged = [];
  let i = 0, j = 0;

  while ((i < n1) && (j < n2)) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  if (i <= n1 - 1) {
    arr1.splice(0,i);
    merged = merged.concat(arr1);
  } else {
    arr2.splice(0, j);
    merged = merged.concat(arr2)
  }
  return merged;
}

//console.log(mergeArrays([4,5,6],[-2,-1,0,7]))

// The same approach
function mergeArrays2(arr1, arr2) {
  let res = [];
  while (arr1.length && arr2.length) {
    let firstArr1 = arr1[0];
    let firstArr2 = arr2[0];
    if (firstArr1 < firstArr2) {
      res.push(firstArr1);
      arr1.shift()
    }
    else {
      res.push(firstArr2);
      arr2.shift()
    }
  }
  return res.concat(arr1).concat(arr2);
}
console.log('mergeArrays', mergeArrays2([1,3,4,5], [2,6,7,8]))
