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
Approach Iterative

1 Iterate list from head and create current node
2 Loop until current is not null
3 Check if current don't have child just update current to current.next and
continue
4 If child node exists then find the tail of child and join that tail to
before the current.next, by doing this we merged the child chain back to the
main thread
5 If current.next is not null change the prev to temp [tail of current child chain]
6 Update current.next to current.child and also change the prev of current.child
to current and null child node [mark visited this child node]

Input: head = [1,2,5,null,null,3,4]
Output: [1,2,3,4,5]

1 --- 2 --- 5 --- null
	  |
	  3 --- 4

1 --- 2 --- 3  ---  4 ---- 5 --- null
Start
current = 1 and no child of 1 just update current to current.next
current = 2 now 2 has child list start from 3 and tail is at 4
once we got tail of 2`s child list update 4.next = current.next (5)
and current.next (5) is not null change the prev to node 4.
update current.child (2s  child 3 to null)
again in next iteration 2 next is 3 and child is null.
update current  to 3
again no child  update current to 4
again no child update current to 5
null termination of loop

Time complexity: O(n)?
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

  let current = head;
  while (current != null) {
    // CASE 1: if no child, proceed
    if (current.child === null) {
      current = current.next;
      continue;
    }
    // CASE 2: got child, find the tail of the child and link it to current.next
    let temp = current.child;
    // Find the tail of the child
    while (temp.next !== null) {
      temp = temp.next;
    }
    // Connect tail with current.next, if it is not null
    temp.next = current.next;

    // if current.next is not null then change the prev of current.next to temp
    if (current.next !== null) {
      current.next.prev = temp
    }
    // Connect node with current.child, and remove current.child make it null
    current.next = current.child;
    current.child.prev = current;
    current.child = null;
  }

  return head;
};


/*
Approach with Stack (DFS)

Illustration
Initial State
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
Stack[]

Step 1:
 1---2---3
         |
         7---8---9---10--NULL
             |
             11--12--NULL
Stack[4---5---6--NULL]

Step 2:
 1---2---3
         |
         7---8
             |
             11--12--NULL
Stack[4---5---6--NULL, 9---10--NULL]

Step 3:
1---2---3---7---8---11---12---9---10---NULL
Stack[4---5---6--NULL]

Step 4:
1---2---3---7---8---11---12---9---10---4---5---6---NULL
Stack[]
*/

// todo check Stack solution
// class Solution {
//   public Node flatten(Node head) {
//       Stack<Node> stack = new Stack<>();
//       Node current = head;
//       while (current != null || !stack.isEmpty()) {
//           if (current.child != null) {
//               if (current.next != null) stack.push(current.next);
//               current.next = current.child;
//               current.next.prev = current;
//               current.child = null;
//           } else {
//               if (current.next == null && !stack.isEmpty()) {
//                   current.next = stack.pop();
//                   current.next.prev = current;
//               }
//           }
//           current = current.next;
//       }
//       return head;
//   }
// }
var flattenUseStack = function(head) {
  let current = head;
  // store current.next when current.child is not null
  let stack = [];

  while (current !== null) {
    if (current.child !== null) {
      stack.push(current.next); // might be null
      current.next = current.child;
      if (current.next !== null)  current.next.prev = current;
      current.child = null;
    } else if (current.next === null && stack.length !== 0) {
      // reach of tail of child, reconnet the next of parent
      current.next = stack.pop();
      if (current.next !== null) current.next.prev  = current;
    }

    current = current.next
  }

  return head;
}


// todo implementation of doubly linked list
// provide a test

// test
//head = [1,2,null,3]

export {
  flatten
}
