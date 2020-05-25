/*
  Leetcode
  easy
  155 Implement a min Stack

  Design a stack that supports push, pop, top,
  and retrieving the minimum element in constant time.
  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  getMin() -- Retrieve the minimum element in the stack.

  Example 1:
  Input
  ["MinStack","push","push","push","getMin","pop","top","getMin"]
  [[],[-2],[0],[-3],[],[],[],[]]

  Output
  [null,null,null,null,-3,null,0,-2]

  Explanation
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin(); // return -3
  minStack.pop();
  minStack.top();    // return 0
  minStack.getMin(); // return -2

  Constraints:
  Methods pop, top and getMin operations will always be called on non-empty stacks

  Overview
  Few things to keep in mind before we get started:

  Make sure that you read the question carefully.
  - The getMin(...) operation only needs to return the value of the minimum,
  it does not remove items from the MinStack.

  - We're told that all the MinStack operations must run in constant time, i.e. O(1) time

  - What if you are told to pop(...), getMin(...), or top(...) while there are no values on your MinStack?
  In constraints, the question say that methods pop, top and getMin operations will always be called on non-empty stacks.
  So you can assume these cases won't happen, or that you should return -1 or throw an exception if they do.
*/

/*
  Approach 2 Stacks

  We could have two Stacks inside our MinStack.

  The main Stack should keep track of the order numbers arrived (a standard Stack),
  and the second Stack should keep track of the current minimum.
  We'll call this second Stack the "min-tracker" Stack for clarity.

  The push(...) method: items should always be pushed onto the main Stack,
  but they should only be pushed onto the min-tracker Stack if they are smaller than the current top of it.
  There's one potential pitfall.
  Instead of only pushing numbers to the min-tracker Stack if they are less than the current minimum,
  we should push them if they are less than or equal to it.
  While this means that some duplicates are added to the min-tracker Stack.

  top(...) returns (but doesn't remove) the top value of the main Stack,
  whereas getMin(...) returns (but doesn't remove) the top of the min-tracker Stack.

  This leaves us still needing to implement MinStack's pop(...) method.
  The value we actually need to pop is always on the top of the main underlying Stack.
  However, if we simply popped it from there,
  the min-tracker Stack would become incorrect once its top value had been removed from the main Stack.

  Complexity analysis
  time O(1) for all operations
  space O(n)
*/
class MinStack {
  /**
  * @constructor
  */
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
  * @param {number} item
  * @returns {void}
  */
  push(item) {
    // The push(...) method: items should always be pushed onto the main Stack,
    // but they should only be pushed onto the min-tracker Stack if they are smaller than the current top of it.
    this.stack.push(item);

    // we need to have <= to solve a problem with duplicates if they have
    if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(item);
    }
  }

  /**
 * @returns {void}
 */
  pop() {
    const item = this.stack.pop();
    if (item === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }
  }

  /**
  * @returns {number}
  */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
  * @returns {number}
  */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

/*
  Min stack using object

  class MinStack {
    constructor(capacity) {
      this.capacity = capacity;
      this.storage = {};
      this.count = 0;
      this.min = new Stack();
    }
    ...
  }
*/
const minStack = new MinStack();

export {
  MinStack,
  minStack
}
