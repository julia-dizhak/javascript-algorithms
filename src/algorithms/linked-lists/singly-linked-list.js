/*
Leetcode
707 Design linked list
medium

You can choose to use the singly linked list or the doubly linked list.
A node in a singly linked list should have two attributes: val and next.
val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list,
you will need one more attribute prev to indicate the previous node in the linked list.
Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:

get(index): Get the value of the index-th node in the linked list. If the index is invalid, return -1.

addAtHead(val): Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.

addAtTail(val): Append a node of value val to the last element of the linked list.

addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.

deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.

Constraints:
0 <= index,val <= 1000
Please do not use the built-in LinkedList library.
At most 2000 calls will be made to get, addAtHead, addAtTail,  addAtIndex and deleteAtIndex
*/

/*
  the constructor function will be called to initialize
  the object with two properties, data and a pointer named next.
  The pointer next is initialized with a default value of null,
  incase no value is passed as an argument.
*/
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null; // link
  }
}

/*
  In the above code, a LinkedList class is defined.
  When an instance of the LinkedList class is formed,

  the constructor function will be called to initialize the object
  with a property, head.
  The head pointer is assigned a value of null
  because when a linked list object is initially created
  it does not contain any nodes.
  It is when we add our first node to the linked list,
  we will assign it to the head pointer.
*/
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
 * Get the value of the index-th node in the linked list.
 * If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
  get(index) {
    // index is outside the bounds of the list
    if (index < 0 || index > this.size - 1 || this.size === 0) {
      return -1;
    }

    // we're at the head
    if (index === 0) {
      return this.head.val;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        // return node, in task has to return val
        return node.val;
      }
      counter++;
      node = node.next
    }
    return -1
  }

  /**
   * A helper function getAt() is defined to get to the desired position.
   * This function can also be later used for performing delete operation
   * from a given position.
   */
  getAt(index) {
    // we're at the head
    if (index === 0) {
      return this.head;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next
    }
    return null
  }

  // insert a node
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    // A newNode object is created with property data and next = null
    let newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      // Link the new node to our original head node
      // The pointer next is assigned head pointer so that both pointers now point at the same node.
      newNode.next = this.head;
      // As we are inserting at the beginning the head pointer needs to now point at the newNode.
      this.head = newNode;
    }
    this.size += 1;
  }

  /**
  * Append a node of value val to the last element of the linked list.
  * @param {number} val
  * @return {void}
  */
  addAtTail(val) {
    let newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      // else, traverse the list to find the tail
      // (the tail node will initially be pointing at null),
      // and update the tail's next pointer.
      let tail = this.head; // or name as lastNode
      while (tail.next) {
        tail = tail.next
      }
      tail.next = newNode;
    }
    this.size ++;
  }

  /**
   * Add a node of value val before the index-th node in the linked list.
   * If index equals to the length of linked list,
   * the node will be appended to the end of linked list.
   * If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    let newNode = new ListNode(val);

    if (index > this.size) return;

    if (!this.head) {
      this.head = newNode;
    }

    if (index === 0) {
      return this.addAtHead(val);
    }

    if (index === this.size) {
      return this.addAtTail(val);
    }

    const previous = this.getAt(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
    this.size++;

    return this.head;
  }

  /**
  * Delete the index-th node in the linked list, if the index is valid.
  * @param {number} index
  * @return {void}
  */
  deleteAtIndex(index) {
    // indexes start from 0
    if (index >= this.size - 1 || index < 0) return;

    if (!this.head) return null;

    // delete first node
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return this.head;
    }

    let counter = 0;
    let node = this.head;
    while (counter < index - 1) {
      node = node.next;
      counter++;
    }

    node.next = node.next.next;
    this.length--;
  }

  deleteList() {
    this.head = null;
  }

  printList() {
    const nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(current.val);
      current = current.next;
    }
    return nodes.join(' -> ')
  }
}

// A list object is created with a property head, currently pointing at null
let linkedList = new LinkedList();
// test 0
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
//linkedList.addAtIndex(1, 2);
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);
console.log(linkedList.printList());
console.log('get', linkedList.get(1))

// test 1
// linkedList.addAtHead(1);
// linkedList.addAtHead(2);
// linkedList.addAtHead(210);
// linkedList.addAtHead(300);
// linkedList.addAtTail(0);
//let linkedList1 = linkedList;

linkedList = JSON.parse(JSON.stringify(linkedList));
//console.log('linked list original', linkedList1)
console.log('linked list', linkedList)



// todo schedule
// todo move to array?
// actual cost parameters
// try with sum
// profit margin
// greedy algorithms
var twoCitySchedCost = function(costs) {
  const n = Math.floor(costs.length/2);
  let total = 0;

  /**
   * Oh I see. So in other words, nested arrays where city A cost is less than city B cost are on the left side of the array and nested arrays where city B cost is less than city A are on the right side of the array -> nested arrays where [0] index is less than [1] index are on the left and nested arrays where [1] index is less than [0] index are on the right. Got it.

So is there an order for the nested arrays once they are sorted accordingly on the left or right? Using the input from Example 1, once sorted, costs = [ [ 30, 200 ], [ 10, 20 ], [ 30, 20 ], [ 400, 50 ] ]. So for instance, is there an order between [ 30, 200 ] and [ 10, 20 ] on the left?

I see for the purposes of this problem that once they are sorted either on the left or right half of the array depending on their indexed optimal values it doesn't matter if they're sorted beyond that but i was just curious.
   */
  costs = costs.sort((a,b) => {
    //debugger
    console.log('a', a);
    console.log('b', b)

    return a[0] - b[0] - (a[1] - b[1])
  });
  console.log('costs', costs)


  // To optimize the company expenses,
  // send the first n persons to the city A
  // and the others to the city B
  for (let i = 0; i < n; i++) {
    total += costs[i][0]+ costs[i+n][1]
  }

  return total

};

// var twoCitySchedCost = function(costs) {
//   costs = costs.sort((a,b) => (b[0] - b[1]) - (a[0] - a[1]));
//   var minCost = 0, i;
//   for(i = 0; i < costs.length/2; i++){
//       minCost += costs[i][1];
//   }
//   for(i = costs.length/2; i < costs.length; i++){
//       minCost += costs[i][0];
//   }
//   return minCost;
// };

//10 + 30 + 50 + 20 = 110





/**
 * Leetcode
 * 328 Odd Even Linked List
 * medium
 *
 * Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
 *
 * Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on .
 *
 * explanation
 * first odd and then even
 * have one list
 * separate odd list
 * separate even list
 *
 * Intuition

Put the odd nodes in a linked list and the even nodes in another. Then link the evenList to the tail of the oddList.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return head;

  var odd = head;
  var even = head.next;
  while (odd.next && odd.next.next) {
    var tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  odd.next = even;
  return head;
};

export { LinkedList }
