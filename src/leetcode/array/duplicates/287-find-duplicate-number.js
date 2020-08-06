/*
Leetcode
287 Find a duplicate Number
medium

Given an array nums containing n + 1 integers where each integer is between 1
and n (inclusive), prove that at least one duplicate number must exist.
Assume that there is only one duplicate number, find the duplicate one.

Example 1:
Input: [1,3,4,2,2]
Output: 2

Example 2:
Input: [3,1,3,4,2]
Output: 3

Note:
1 You must not modify the array (assume the array is read only).

2 You must use only constant, O(1) extra space.

3 Your runtime complexity should be less than O(n2).

4 There is only one duplicate number in the array, but it could be repeated more
than once.
*/

/*
Approach Sort

time
space
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  nums = nums.sort((a,b) => a - b);
  //console.log('nums', nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i+1]) {
      return nums[i]
    }
  }
  return -1;
};

/*
Can use Hash here, but it required extra space in memory
*/


// easy approach hash and sort?
//console.log('findDuplicate', findDuplicate([3,1,3,4,2]))

/*
Approach 2 pointers: slow and fast?


*/
var findDuplicate2Pointers = function(nums) {
  if (nums === undefined || nums.length === 0) {
    return -1;
  }

  // sort first 1,3,4,2,2 -> 1 2 2 3 4
  // + 2 pointers
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    //debugger
    if (nums[slow] !== nums[fast]) {
      slow++;
    }

  }

}

//console.log('findDuplicate2Pointers', findDuplicate2Pointers([3,1,3,4,2]))

export {
  findDuplicate
}

/*
141

Given a linked list, determine if it has a cycle in it.
To represent a cycle in the given linked list, we use an integer pos which
represents the position (0-indexed) in the linked list where tail connects to.
If pos is -1, then there is no cycle in the linked list.

Follow up:
Can you solve it using O(1) (i.e. constant) memory?

Confusing input
I don't see why we need 'pos' in the inputs, while we don't see it in the code. It's kind confusing.
I had the same problem dealing with the explanation. But finally I understand that pos is just a parameter for creating unit test case, pos helps to create the linked list and that is send as parameter input.
'pos' is only used for your test cases. Try creating a cyclic linked list without it.

*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

/*
Approach Hash
*/

function linkedListCycle(head, pos) {
  let nodesSeen = {};

  for (let i = 0; i < head.length; i++) {
    if (nodesSeen[head[i]]) {
      return true
    } else {
      nodesSeen[i] = head[i]
    }

  }
  // while (head !== null) {

  // }


}
console.log('linkedListCycle', linkedListCycle([3,2,0,-4]));

