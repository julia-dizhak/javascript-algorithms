/*
Leetcode
26 Remove duplicates from sorted array
easy

Given a sorted array nums, remove the duplicates in-place
such that each element appear only once and return the new length.

Do not allocate extra space for another array,
you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified
to 0, 1, 2, 3, and 4 respectively.
It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference,
which means modification to the input array will be known to the caller as well.

Internally you can think of this:
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

Hint 1
In this problem, the key point to focus on is the input array being sorted.
As far as duplicate elements are concerned, what is their positioning in the array
when the given array is sorted? Look at the image above for the answer.
1 1 2 3 4 4 4
If we know the position of one of the elements,
do we also know the positioning of all the duplicate elements?

Hint 2
We need to modify the array in-place and the size of the final array would 
potentially be smaller than the size of the input array.
So, we ought to use a two-pointer approach here.
One, that would keep track of the current element in the original array
and another one for just the unique elements.

Hint 3
Essentially, once an element is encountered, you simply need to bypass its duplicates
and move on to the next unique element.
*/

/*
Approach 2 Pointers: slow and fast runner

Algorithm
Since the array is already sorted, we can keep two pointers i and j,
where i is the slow-runner while j is the fast-runner.
As long as nums[i] = nums[j], we increment j to skip the duplicate.

When we encounter nums[j] is not equal nums[i]
the duplicate run has ended so we must copy its value to nums[i+1].
i is then incremented and we repeat the same process again until j reaches the end of array.

Complexity analysis
Time complexity: O(n). Assume that nn is the length of array.
Each of i and j traverses at most n steps.

Space complexity: O(1).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesTwoPointers = function(nums) {
  if (nums === undefined || nums.length === 0) {
    return -1;
  }

  if (nums.length === 1) {
    return nums.length;
  }

  // 2 pointers approach
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    // if current element is not duplicate,
    // slow runner grows one step and copies the current value
    if (nums[slow] !== nums[fast]) {
      slow += 1;
      nums[slow] = nums[fast]
    }
  }

  return slow + 1;
};

/*
Approach Brute force

Easy solution but doesn't required condition with space
There is extra space?
*/
var removeDuplicates = function(nums) {
  let uniqueArr = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i+1]) {
      uniqueArr.push(nums[i])
    }
  }

  return uniqueArr.length
};

// tests
// console.log('removeDuplicatesTwoPointers', removeDuplicatesTwoPointers([0,0,1,1,1,2,2,3,3,4]))


/*
Remove Dupes

Write a function that takes in a string and returns a new string. The new string 
should be the same as the original with every duplicate character removed.
*/

/*
Approach Hash

We create an object and an array, both of which will hold unique characters.

The for-loop goes through every character and checks if it’s present in our object.
If so, do nothing. It’s a duplicate letter.

If not present in our object, we need to insert it into both the object and the 
array.

We need to maintain both the object and the array because they perform different 
functions for us. The object will allow us to check if we’ve already seen the 
letter instantaneously. However, objects don’t keep track of the order that 
items are inserted in. For that, we also need to push the characters into an 
array.

At the end, we join all the characters in the array together and return the string.

Time
We have to process every character, so our time complexity is: O(n)

Space: We store every character twice, in an array and in an object. 
This gives us O(2n) which simplifies to: O(n).
*/
function removeDupesUseHash(str) {
  let chars = {};
  let uniqueChars = [];

  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]] === undefined) {
      chars[str[i]] = (chars[str[i]] || 0) + 1;
      uniqueChars.push(str[i]);
    }
  }

  return uniqueChars.join('')
}

/*
Use Set
As mentioned in “Is Unique”, JavaScript received a new data structure that allows 
items to be inserted only once and keeps track of insertion order. Using this 
construct, the Set, we can greatly simplify our code.

Let’s unpack these two lines.
const uniqueCharacters = new Set(str);
This line creates a new set and provides the string as input. In JavaScript, a 
string is an iterable item, meaning that the Set breaks it up into its 
individual characters and inserts them one by one, in order.

A set cannot receive the same value more than once. Therefore, it’ll skip over 
repeats in the string. The set will maintain a list of unique characters in order.

On the next line, we get an array out of the set and join the characters back 
together.

Time and space complexities remain the same.
*/
function removeDupesUseSet(str) {
  const uniqueCharacters = new Set(str);
  return Array.from(uniqueCharacters).join();
}

// the same approach
function removeDupesUseSet1(str) {
  let unique = new Set();

  for (let i = 0; i < str.length; i++) {
    unique.add(str[i], i);
  }

  return Array.from(unique).join()
}

// tests
// console.log('removeDupes', removeDupesUseSet('aabbccdd'));
// console.log('removeDupes', removeDupesUseSet('abcd'));

export {
  removeDuplicates,
  removeDuplicatesTwoPointers,

  removeDupesUseHash,
  removeDupesUseSet, removeDupesUseSet1
}
