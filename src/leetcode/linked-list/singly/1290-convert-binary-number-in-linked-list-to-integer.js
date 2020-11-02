/*
Leetcode
1290. Convert Binary Number in a Linked List to Integer
easy


Hint 1
Traverse the linked list and store all values in a string or array. convert the values obtained to decimal value.

Hint 2
You can solve the problem in O(1) memory using bits operation. use shift left operation ( << ) and or operation ( | ) to get the decimal value in one operation.

Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0

Example 3:
Input: head = [1]
Output: 1

Example 4:
Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880

Example 5:
Input: head = [0,0]
Output: 0

Constraints:
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
*/

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
} 


/*
Approach Binary representation

Here we have two subproblems:
- To parse non-empty linked list and to retrieve the digit sequence which represents 
a binary number.

- To convert this sequence into the number in decimal representation.

The first subproblem is easy because the linked list is guaranteed to be non-empty.

The second subproblem is to convert (101) into 5.

Solution
Initialize result number to be equal to head value: num = head.val. This operation is safe because the list is guaranteed to be non-empty.

Parse linked list starting from the head: while head.next:

The current value is head.next.val. Update the result by shifting it by one to the left and adding the current value: num = num * 2 + head.next.val.
Return num.
*/


/**
 * @param {ListNode} head
 * @return {number}
*/
var getDecimalValue = function(head) {
  let output = [];

  while (head) {
    let val = head.val;
    head = head.next;
    output.push(val);
  }

  let str = output.join('')
  return parseInt(str, 2);  
};

// the same approach
var getDecimalValue1 = function(head) {
  let output = [];
  let num = head.val;
  output.push(num)

  while (head.next !== null) {
    head = head.next;
    num = head.val;
    output.push(num);
  }

  let str = output.join('')
  // console.log(str);
  // console.log(str.toString(2));
  return parseInt(str, 2);
    
};
// head = [1,0,1]
// [0]
// [0,0]
let head = new ListNode(0);
//let head = new ListNode(1);
// head.next = new ListNode(0);
// head.next.next = new ListNode(1)
console.log(head);
const val = getDecimalValue(head);
console.log(val)

export {
  ListNode,
  getDecimalValue, getDecimalValue1
}