/*
Leetcode
430 Flatten a Multilevel Doubly Linked List

You are given a doubly linked list which in addition to the next and previous
pointers, it could have a child pointer, which may or may not point to a separate
doubly linked list. These child lists may have one or more children of their own,
and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

Example 1:
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: todo

The multilevel linked list in the input is as follows:

examples todo
*/


/*
Approach

implementation of doubly linked list
todo

1 Start form the head, move one step each time to the next node
2 Case when there is no child
3 case with child: When meet a node with child, say node p, follow its child
chain to the end and connect the tail node with p.next, by doing this we merged
the child chain back to the main thread
4 Return to p and proceed until find next node with child.
5 Repeat until reach null
*/

/**
 * Definition for a Node.
 * function Node(val, prev, next, child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var flatten = function(head) {
  if (head === null) return head;

  let p = head;
  while (p != null) {
    // CASE 1: if no child, proceed
    if (p.child === null) {
      p = p.next;
      continue;
    }
    // CASE 2: got child, find the tail of the child and link it to p.next
    let temp = p.child;
    // Find the tail of the child
    while (temp.next !== null) {
      temp = temp.next;
    }
    // Connect tail with p.next, if it is not null
    temp.next = p.next;

    if (p.next !== null) {
      p.next.prev = temp
    }
    // Connect p with p.child, and remove p.child
    p.next = p.child;
    p.child.prev = p;
    p.child = null;
  }

  return head;
};

// test
//head = [1,2,null,3]

export {
  flatten
}
