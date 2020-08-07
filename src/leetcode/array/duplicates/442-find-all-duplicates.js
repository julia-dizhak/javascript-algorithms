/*
Leetcode
422 Find all duplicates in Array
medium

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements
appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input: [4,3,2,7,8,2,3,1]
Output: [2,3]
*/


/*
Approach Hash (doesn't pass requirements)

Intuition
You could create a map to store the count of occurrence of each element and then
only return those elements which have count equal to 2. But this would result
in O(n) space complexity.

time is O(n)
space is (n)
*/
const findAllDuplicatesUseHash = function(nums) {
  let duplicates = []
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1;
  }
  for (const key in hash) {
    if (Number(hash[key]) > 1) {
      duplicates.push(Number(key))
    }
  }

  return duplicates;
}

//console.log('findAllDuplicatesUseHash', findAllDuplicatesUseHash([4,3,2,7,8,2,3,1]))


/*
Approach Sort + 2 pointers (doesn't pass requirements)
sort [1,2,2,3,3,4,7,8]

time is O(n log n)
space is O(1) just a return Array as result does not affect space complexity, because
and it doesn't grow when input grows
*/
const findAllDuplicatesSort = function(nums) {
  nums = nums.sort((a,b) => a - b);
  let result = [];

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      result.push(nums[i])
    }
    i++;
  }
  return result;
}


/*
Approach Array

The idea that you can create an array of size n+1 and fill it by 0 .
Because you know that given an array of integers in between 1 ≤ a[i] ≤ n (n = size
of array).
Then you loop through an input array and use nums[i] as index and fill new created array
input     -> 4,3,2,7,8,2,3,1
new arr   ->0,0,0,4,0,0,0,0 i=0
            0,0,3,4,0,0,0,0 i=1
            0,2,3,4,0,0,0,0 i=2
            0,2,3,4,0,0,7,0 i=3
            0,2,3,4,0,0,7,8 i=4
            0,2,3,4,0,0,7,8 i=5 nums[i] === 2, arr[2] !== 0, 2 is duplicate
So it arr[i] is not already 0, when you can say that is duplicate

time is O(n)
space is O(n)
*/
const findAllDuplicatesUseArray = function(nums) {
  const n = nums.length;
  if (n <= 0) return -1;

  let result = [];
  let arr = new Array(n+1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]] === 0) {
      arr[nums[i]] = nums[i]
    } else if (arr[nums[i]] === nums[i]) {
      result.push(nums[i]);
    }
  }

  return result;
}

/*
Approach Mutate exists Array

If you wanna find a solution without extra space, when you need to memorize a trick
(idea).
Pay an attention to detail in each description.
What does catch your eyes?
We could exploit the fact that each element of the array lies between 1 and n
(size of array).

Cath my eye:
1 For example the fact that the numbers are between 1 and the length of the array
points to the direction that the solution perhaps has something to do with
indices of the array, as subtracting 1 from any value in the array will give
you a valid index.
2 Also they ask you to do it in no extra space. That leads to the belief that
maybe the given array has to be mutated.

We can mutate the array to store information about the number of occurrences of
an element. We could do this by changing the sign of the element at nums[i] index.
If we reach at an element for which the element at that index is negative, this
implies that, that particular element has appeared before.

Say, nums = [4,3,2,7,8,2,3,1]. While traversing on the array we would change the
sign of elements at nums[i] index and check whether the element at nums[i]
is negative or not.

change the sign of element at 4th index
i = 0, [4,3,2,-7,8,2,3,1]
change the sign of element at 3rd index
i = 1, [4,3,-2,-7,8,2,3,1]
change the sign of element at 2nd index
i = 2, [4,-3,-2,-7,8,2,3,1]
change the sign of element at 7th index
i = 3, [4,-3,-2,-7,8,2,-3,1]
change the sign of element at 8th index
i = 4, [4,-3,-2,-7,8,2,-3,-1]
here before changing the sign of element at
i = 5, [4,3,-2,-7,8,2,-3,-1]
2nd index we will realize that it is already negative, which implies that 2 has
appeared before in the array. So, we will push 2 in the ans

again we will encounter a negative element at 3rd index and we will push 3 into
our ans
i = 6, [4,3,2,-7,8,2,-3,-1]
change the sign of element at 1st index
i = 7, [-4,3,-2,-7,8,2,-3,-1]
This way we could keep a track of element which appears again without requiring
any extra space.

Time is O(n)

Space is O(1)
What ever you return doesn't mean space complexity of an algorithm. I mean you have to
return a result (in this case as array) and it requires space. But this space doesn't
really grow in some formula then your input grows
Its' a constant space.
*/
const findAllDuplicates = function(nums) {
  // when find a number i, flip the number at position i-1 to negative.
  // if the number at position i-1 is already negative, i is the number that
  // occurs twice

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    // check if the element at nums[i]th index is negative
    // Because index can never be negative, we don't have to use Math.abs(index + 1)
    if (nums[index] < 0) result.push(index+1);
    // change the sign of nums[i]th element
    nums[index] = -nums[index]; // or nums[index] *= -1;
  }

  return result;
}

// tests
// console.log('findAllDuplicates', findAllDuplicates([4,3,2,7,8,2,3,1]))
// console.log('findAllDuplicates', findAllDuplicates([1,1]))


// move
/*
linear time
extra space
*/
// find which are not enough
const findAllDuplicatesMin1 = function(nums) {
  const n = nums.length;
  let result = [];
  let arr = new Array(n).fill(0);

  //let count = 0;
  for (let i = 0; i < nums.length; i++) {
    //debugger
    if (arr[nums[i]] === 0) {
      arr[nums[i]] = nums[i]
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) result.push(i)

  }
  console.log('arr', arr)
  return result;
}
/*
in place
*/
const findAllDuplicatesMin = function(nums) {
  const n = nums.length;
  let result = [];
  //let arr = new Array(n).fill(0);

  let count = 0;
  // while (n > 0) {
  //   n--;
  // }
  // arr is [4,3,2,7,8,2,3,1]
  for (let i = 0; i < nums.length; i++) {
    //debugger;
    let pos = nums[i];
    if (nums[i] !== i) {
      let temp = nums[i]; // 4
      nums[i] = nums[pos];
      nums[pos] = temp;
      count = 0;
    } else if (nums[i] === i) {
      count +=1
    } else if (count > 1) {
      result.push(nums[i])
    }

    // if (arr[nums[i]] === 0) {
    //   arr[nums[i]] = nums[i]
    // }
  }

  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] === 0) result.push(i)

  // }
  console.log('nums', nums)
  return result;
}

//console.log('findAllDuplicatesMin', findAllDuplicatesMin([4,3,2,7,8,2,3,1]))


// https://medium.com/javascript-in-plain-english/algorithms-101-group-anagrams-in-javascript-b3e3c10d211e
// https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns
// https://dev.to/wangonya/sorting-algorithms-with-javascript-part-2-3g51#:~:text=log(sorted)-,Heap%20Sort,every%20time%20this%20is%20done.
//https://codeburst.io/implementing-dfs-and-bfs-using-javascript-5034f3cee9a1


export {
  findAllDuplicatesUseHash,
  findAllDuplicatesSort,
  findAllDuplicatesUseArray,
  findAllDuplicates,
  //findAllDuplicates1,
  //findAllDuplicates2
}
