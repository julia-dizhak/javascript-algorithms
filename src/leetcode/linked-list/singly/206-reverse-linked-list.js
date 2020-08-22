/*
Leetcode
206 Reverse Linked List
easy


Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?

Hints
Think of doing this iteratively in a single pass.
Think of doing this recursively in a single pass.
*/

// node
class Node {
  constructor(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
  }
}

/*
Approach Iterative

You are given reference to the head of linked list
Reverse the singly linked list and return the pointer/reference to the head of
the reversed linked list.


Let’s see how the solution works:

If the linked list only contains 0 or 1 nodes, then the current list can be
returned as it is. If there are two or more nodes, then the iterative solution
starts with two pointers:

- reversed_list: A pointer to already reversed linked list (initialized to head).
- list_to_do: A pointer to the remaining list (initialized to head.next).

We then set the reversed_list.next to NULL. This becomes the last node in the
reversed linked list. reversed_list will always point to the head of the newly
reversed linked list.

At each iteration, the list_to_do pointer moves forward (until it reaches NULL).
The current node becomes the head of the new reversed linked list and starts pointing
to the previous head of the reversed linked list.

The loop terminates when list_to_do becomes NULL, and the reversed_list pointer
is pointing to the new head at the termination of the loop.


you can check https://www.educative.io/courses/coderust-hacking-the-coding-interview/lq2j
there is a nice illustration

Runtime complexity
The runtime complexity of this solution is linear, O(n), as we can reverse the
linked list in a single pass.

Memory complexity
The runtime complexity of this solution is constant, O(1), as no extra memory is
required for the iterative solution.
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverse = function(head) {
  //  no need to reverse if head is null or there is only 1 node.
  if (!head || !head.next) return head;

  // 2 or more nodes
  let reversedList = head; // already reversed linked list
  let currentHead = head.next; // or let listTodo = head.next;
  reversedList.next = null; // becomes last node in reversed linked list

  while (currentHead) {
    let temp = currentHead;
    currentHead = currentHead.next; // loop next element

    // The current node becomes the head of the new reversed linked list and
    // starts pointing to the previous head of the reversed linked list.
    temp.next = reversedList;
    reversedList = temp;
  }

  return reversedList;
};

/*
todo
https://www.youtube.com/watch?v=B3U6LExgevE
https://leetcode.com/problems/reverse-linked-list/solution/
https://www.educative.io/courses/coderust-hacking-the-coding-interview/lq2j
https://leetcode.com/problems/middle-of-the-linked-list/
*/

// tests
let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
console.log('list', list);
list = reverse(list);
console.log('reversedList', list);

export {
  reverse,
  Node
}
