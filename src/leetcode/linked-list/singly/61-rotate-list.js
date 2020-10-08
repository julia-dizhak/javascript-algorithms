/*
Leetcode 
61 Rotate List
medium

Given a linked list, rotate the list to the right by k places, where k is 
non-negative.

Example 1:
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

Example 2:
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL

*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

/*
Brute force

list is good for 2 pointers?

The basic idea is to link the tail of the list with the head, make it a cycle. 
Then count to the rotate point and cut it.


*/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return head;
  //if (k === 0) return head;

  let copyHead = head;
  console.log('copyHead', copyHead);
  
  let len = 1;
  while (copyHead.next) {
    copyHead = copyHead.next;
    len++;
  }

  // found tail
  // let last = copyHead;
  // console.log('last', last);
  // make a cycle
  copyHead.next = head;
  console.log('head', head);

  // dont understand this part
  for (let i = len - k % len; i > 1; i--) {
    head = head.next;
  }

  copyHead = head.next;
  head.next = null;
  return copyHead;
};
// test [], 0

// tests
// 1->2->3->4->5->NULL
let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);
console.log('list', list);
console.log('rotateRight', rotateRight(list, 2))

/*
The Fast & Slow pointer approach, also known as the Hare & Tortoise algorithm, is a pointer algorithm that uses two pointers which move through the array (or sequence/LinkedList) at different speeds. This approach is quite useful when dealing with cyclic LinkedLists or arrays.

By moving at different speeds (say, in a cyclic LinkedList), the algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

One of the famous problems solved using this technique was Finding a cycle in a LinkedList. Let’s jump onto this problem to understand the Fast & Slow pattern.

*/