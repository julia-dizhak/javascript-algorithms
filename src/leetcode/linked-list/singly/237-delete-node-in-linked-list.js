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
Explanation: You are given the second node with value 5, the linked list should
become 4 -> 1 -> 9 after calling your function.

Example 2:
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should
become 4 -> 5 -> 9 after calling your function.

Note:
The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the
linked list.
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
to point to the node after it (see below).

Since we do not have access to the node before the one we want to delete,
we cannot modify the next pointer of that node in any way.
Instead, we have to replace the value of the node we want
to delete with the value in the node after it,
and then delete the node after it.

// todo provide pictures

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

/*
Usual way of deleting a node in linked list

To delete a node from linked list, we need to do following steps.
1) Find previous node of the node to be deleted.
2) Change the next of previous node.
3) Free memory for the node to be deleted.

1 -> 2 -> 3 -> 4 -> 5 -> x
need to remove 3

Time is O(n)
space is O(1)
*/
var deleteNodeUsualWay = function(node, key) {
  let temp = node;
  let prev = null;

  // If head node itself holds the key to be deleted
  while (temp !== null && node.val === key) {
    node = temp.next; // changed head
    return;
  }

  // Search for the key to be deleted, keep track of the
  // previous node as we need to change temp.next
  while (temp !== null && node.val !== key) {
    prev = temp;
    temp = temp.next;
  }

  // If key was not present in linked list
  if (temp == null) return;

  // Unlink the node from linked list
  prev.next = temp.next;
}

export { deleteNode, deleteNodeUsualWay }
