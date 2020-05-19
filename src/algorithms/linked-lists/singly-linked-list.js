// the constructor function will be called to initialize the object with two properties, data and a pointer named next
//  The pointer next is initialized with a default value of null, incase no value is passed as an argument.
class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * In the above code, a LinkedList class is defined. When an instance of the LinkedList class is formed, the constructor function will be called to initialize the object with a property, head. The head pointer is assigned a value of null because when a linked list object is initially created it does not contain any nodes. It is when we add our first node to the linked list, we will assign it to the head pointer.
 */
class SinlgyLinkedList {
  constructor() {
    this.head = null
  }

  // insert
  /**
   *
   * An insert operation will insert a node into the list. There can be three cases for the insert operation.
Inserting a new node before the head (at the beginning of the list).
Inserting a new node after the tail (i.e. at the end of the list).
Inserting a new node in the middle of the list (at a given random position).
   */
  append(data) {
    let newNode = new ListNode(data);

    while (newNode.next != null) {
      newNode = newNode.next
    }

    newNode.next = newNode(data)
  }
}
const list = new SinlgyLinkedList()
console.log('list', list)

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

export { SinlgyLinkedList }
