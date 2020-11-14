/*
Leetcode
445 Add 2 numbers II
medium

You are given two non-empty linked lists representing two non-negative integers. 
The most significant digit comes first and each of their nodes contain a single 
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 
0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists 
is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
} 

/*
Approach
todo
*/
var addTwoNumbers = function(l1, l2) {


}

// (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
let l1 = new ListNode(7);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
// l1.next.next.next = new ListNode(3);
console.log(l1);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log('addTwoNumbers', addTwoNumbers(l1, l2));


var maxAncestorDiff = function(root) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                
}
export {
  addTwoNumbers
}
