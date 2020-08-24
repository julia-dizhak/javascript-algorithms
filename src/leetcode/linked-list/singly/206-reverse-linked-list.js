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
The same approach: Iterative

reverse
find last
point to previous
*/

function reverseIterative(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

/*
Approach: Use recursion

Key takeaways
The first thing to remember (and to mention to interviewer as well) is that the
recursive version uses the stack. OS allocates stack memory, and this solution can
run out of memory for very large linked lists (thinks billions of items).

We recursively visit each node in the linked list until we reach the last node.
This last node will become the new head of this list.
1 -> 2 -> 3 -> 4 -> 5
find 5
5 is head: 5 -> ...
On the return path, each node is going to append itself to the end of the partially
reversed linked list.

Here is how reversal works: if you have a reversed linked list of all nodes to the left
of the current node, and you know the last node of the reversed linked list, then
inserting the current node as the next to the last node will create the new reversed
linked list. The trick here is that you don't explicitly need to track the last node.
The next pointer in the current node is already pointing to the last node in the
partially reversed linked list.

Time is linear
Memory is linear, because of recursion
*/

function reverseUseRecursion(head) {
  //debugger
  // base case, no need to reverse if head is null or there is only one node
  console.log('head', head)
  if (!head || !head.next) return head;

  console.log('head next', head.next)
  let reversedList = reverseUseRecursion(head.next);
  head.next.next = head;
  head.next = null;
  return reversedList;
}

/*
todo
https://www.youtube.com/watch?v=B3U6LExgevE
check official solution https://leetcode.com/problems/reverse-linked-list/solution/
https://www.educative.io/courses/coderust-hacking-the-coding-interview/lq2j
https://leetcode.com/problems/middle-of-the-linked-list/

*/

/*
todo
brute force
https://leetcode.com/problems/stream-of-characters/discuss/807795/Brute-Force-JavaScript-9-lines

*/
/**
 * @param {string[]} words
 */
// var StreamChecker = function(words) {
//   this.words = words;
//   let storage=""
//   this.storage = storage

// };

// /**
// * @param {character} letter
// * @return {boolean}
// */
// StreamChecker.prototype.query = function(letter) {
//   this.storage+=letter
//   if (this.storage.length > 2001) this.storage = this.storage.substr(1)
//       for(word of this.words){
//           if(word == this.storage.substr(- word.length)) return true
//       }
//   return false
// };

// tests
let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
console.log('original ist', list);
list = reverseUseRecursion(list);
console.log('after reverse', list);

export {
  reverse,
  reverseIterative,
  reverseUseRecursion,
  Node
}
