/*

Leetcode
237 Delete a node in Linked List

Write a function to delete a node (except the tail) in a singly linked list,
given only access to that node.

Given linked list -- head = [4,5,1,9],
which looks like following: 4->5->1->9

Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
Example 2:

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

Note:

The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the linked list.
Do not return anything from your function.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
Approach swap with next node

The usual way of deleting a node node from a linked list
is to modify the next pointer of the node before it,
to point to the node after it.

Since we do not have access to the node before the one we want to delete,
we cannot modify the next pointer of that node in any way.
Instead, we have to replace the value of the node we want
to delete with the value in the node after it,
and then delete the node after it.

Because we know that the node we want to delete
is not the tail of the list, we can guarantee that
this approach is possible.

Time and space complexity are both O(1).
*/
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  addAtHead(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    this.size++
  }

  addAtTail(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next
      }
      tail.next = newNode
    }
  }

  addAtIndex(index, val) {

  }
}



export { deleteNode }
