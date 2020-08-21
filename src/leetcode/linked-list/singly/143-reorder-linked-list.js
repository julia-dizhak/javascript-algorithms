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
  a) Find the last node, remove it from the end and insert it as next of the current node.
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
    p = last.next;
    last.next = null;
    if (!p) break;
    p.next = current.next;
    current.next = p;
    current = current.next.next;
  }

  return;
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
console.log('list', list);
list = reorderListBruteForce(list);
console.log('reorder list', list);
// console.log('reorder list val 1', list.val);
// console.log('reorder list val 2', list.next.val);

var reorderList1 = function(head) {
  if (head === null || head.next === null || head.next.next === null) return;
  //debugger;
  console.log('head', head)

  // case head is null
  // if (!head) {
  //   tail = head;
  // }

  // todo shouldn't return anything
  if (!head) return;
  // if one element
  if (!head.next) return;


  // try again
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = current.next.next;

  // try 1 idea second last
  //let size = 1;
  // let tail = head;
  // while (tail.next.next) {
  //   tail = tail.next;
  //   size++;
  // }
  // debugger
  // // second last now last
  // let secondLast = tail;
  // let lastNode = tail.next;
  // lastNode.next = head.next; // second first
  // head.next = lastNode;
  // secondLast.next = null; // second last node

  //head.next = tail;
  // let tail = head;
  // while (tail.next) {
  //   tail = tail.next;
  // }
  // let secondElement = head.next;
  // head.next = tail;
  // tail.next = secondElement

  // tail last element
  return head;
}




var reorderList = function(head) {
  //debugger;
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
//const head = list.head; // spread operator
//const newList = reorderList(list);
//console.log('newList', newList);
//console.log('print list', printList(newList))

function printList(head) {
  let nodes = [];
  let current = head;
  while (current) {
    nodes.push(current.val);
    current = current.next;
  }
  return nodes.join(' -> ')
}
//debugger

export {
  Node,
  LinkedList,
  reorderListBruteForce,
  reorderList
}
