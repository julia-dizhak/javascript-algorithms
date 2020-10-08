/*
Leetcode
143 Reorder List
medium

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/

class Node {
  constructor(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
  }
}

// describe Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAttHead(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
  }
}

/*
Approach Brute force

Idea
1) Initialize current node as head.
2) While next of current node is not null, do following
  a) Find the last node, remove it from the end and insert it as next of the 
  current node.
  b) Move current to next to next of current

Time complexity of the above simple solution is O(n2) where n is the number of nodes
in the linked list
*/
var reorderListBruteForce = function(head) {
  if (head === null || head.next === null || head.next.next === null) return;

  let current = head;
  let last;
  let p;

  while (current) {
    last = current;
    p = current;
    while (last.next && last.next.next) {
      last = last.next;
    }
    // p is last, last is second last
    p = last.next; // 5
    last.next = null; // 4 -> null
    if (!p) break; // there is no nodes after p
    p.next = current.next; // 5.next = 2 -> 3 -> 4
    current.next = p; // 2 = 5 -> 2 -> 3 -> 4     => 1 -> 5 -> 2 -> 3 -> 4
    // check third node
    current = current.next.next; // current is 3
  }

  return;
}

var reorderListBruteForce1 = function(head) {
  if (!head) return;

  if (head === null || head.next === null || head.next.next === null) return;

  let outer = head;
  while (outer.next && outer.next.next) {
    let temp = outer; // first
    let current = outer.next; // second first

    while (temp.next.next) { // second last
      temp = temp.next;
    }

    // outer first
    outer.next = temp.next; // last and remove last
    temp.next = null; // remove last
    outer.next.next = current;
    outer = outer.next.next;
  }

  return head;
}

/*
Approach Use Array

1) Copy contents of given linked list to a vector.
2) Rearrange given vector by swapping nodes from both ends.
3) Copy the modified vector back to the linked list.

*/

// todo separate function in several: print nodes and swap nodes,
// check https://leetcode.com/problems/reorder-list/discuss/715446/javascript-easiest
// https://leetcode.com/problems/reorder-list/discuss/802757/Heavily-commented-JavaScript-solution-using-a-stack
var reorderList1 = function(head) {
  if (head === null || head.next === null || head.next.next === null) return;

  let nodes = [];
  let current = head;
  while (current) {
    nodes.push(current.val);
    current = current.next;
  }
  console.log(nodes);
  // reverse 5 4 3 2 1
  // reorder 1 5 2 4 3
  // let left = 0;
  // let right = nodes.length - 1;
  // while (left < right) {
  //   let temp = nodes[left];
  //   nodes[left] = nodes[right];
  //   nodes[right] = temp;
  //   left = +2;
  //   right = -2;
  // }
  for (let i = 0; i < Math.floor(nodes.length) / 2; i++) {
    if (i !== 0) {

    }

  }
  console.log(nodes);

}

/*
Approach efficient

Algorithm
The problem can be solved as efficient as O(n) using the following implementation.

1 Find the middle of linked list.
2 Separate the list into two halves and reverse the second half.
3 Rejoin both the lists in alternate order.
*/

var reorderList = function(head) {
  //debugger
  if (head === null || head.next === null || head.next.next === null) return;

  // 1. Reach to the middle of list
  // haare 2 pointers
  let slow = head, fast = slow.next;
  while (fast != null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
}

// tests
// example 1 -> 2 -> 3 -> 4
// let list = new LinkedList();
// list.addAttHead(4);
// list.addAttHead(3);
// list.addAttHead(2);
// list.addAttHead(1);
let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
//console.log('list', list);
//list = JSON.parse(JSON.stringify(list));
//console.log('list', list);
reorderList(list);
//console.log('reorder list', list);
// console.log('reorder list val 1', list.val);
// console.log('reorder list val 2', list.next.val);

function printList(head) {
  let nodes = [];
  let current = head;
  while (current) {
    nodes.push(current.val);
    current = current.next;
  }
  return nodes.join(' -> ')
}
//console.log('print list', printList(list));

/*
Sort important? 1 3 5 6 8

time is linear
space is O(n)
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity1 = function(A) {
  let even = [];
  let odd = []

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      even.push(A[i]);
    } else {
      odd.push(A[i])
    }
  }
  console.log(even)
  console.log(odd)
  return [].concat(even).concat(odd);
};

var sortArrayByParity = function(A) {
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    //debugger
    if (A[left] % 2 !== 0) {
      let temp = A[left];
      A[left] = A[right];
      A[right] = temp;
      left++;
      right--;
    }
  }
};

//console.log('sortArrayByParity', sortArrayByParity([3,1,2,4]))
// console.log('sortArrayByParity', sortArrayByParity([3,1]))
// console.log('sortArrayByParity', sortArrayByParity([2,4]))
// console.log('sortArrayByParity', sortArrayByParity([1,3,9,5,6,7,8]))

export {
  Node,
  LinkedList,
  reorderListBruteForce, reorderListBruteForce1,
  reorderList
}
