/*
Leetcode
easy
155 Implement a min Stack

Design a stack that supports push, pop, top,
and retrieving the minimum element in constant time.
push(x) - Push element x onto stack.
pop() - Removes the element on top of the stack.
top() - Get the top element.
getMin() - Retrieve the minimum element in the stack.

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

- What if you are told to pop(...), getMin(...), or top(...)
while there are no values on your MinStack?
In constraints, the question say that methods pop, top and getMin operations
will always be called on non-empty stacks.
So you can assume these cases won't happen, or that you should return -1
or throw an exception if they do.
*/


/*
  Approach 2 Stacks

  We could have two Stacks inside our MinStack.

  The main Stack should keep track of the order numbers arrived (a standard Stack),
  and the second Stack should keep track of the current minimum.
  We'll call this second Stack the "min-tracker" Stack for clarity.

  The push(...) method: items should always be pushed onto the main Stack,
  but they should only be pushed onto the min-tracker Stack if they are smaller
  than the current top of it.

  There's one potential pitfall.
  Instead of only pushing numbers to the min-tracker Stack if they are less than
  the current minimum, we should push them if they are less than or equal to it.
  While this means that some duplicates are added to the min-tracker Stack.

  top(...) returns (but doesn't remove) the top value of the main Stack,
  whereas getMin(...) returns (but doesn't remove) the top of the min-tracker Stack.

  This leaves us still needing to implement MinStack's pop(...) method.
  The value we actually need to pop is always on the top of the main underlying Stack.
  However, if we simply popped it from there, the min-tracker Stack would become
  incorrect once its top value had been removed from the main Stack.

  Complexity analysis

  time complexity
  O(1) for all operations
  push(...): Checking the top of a Stack, comparing numbers, and pushing to the top of a Stack (or adding to the end of an Array or List) are all O(1) operations.

  pop(...): Popping from a Stack (or removing from the end of an Array, or List)
  is an O(1) operation.

  top(...): Looking at the top of a Stack is an O(1) operation.

  getMin(...): Same as above. This operation is O(1) because we do not need to compare values to find it.
  If we had not kept track of it on the Stack,
  and instead had to search for it each time, the overall time complexity would have been O(n).

  space complexity
  Worst case is that all the operations are push.
  In this case, there will be O(2n) = O(n) space used.
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
Approach: use one stack only: stack of value / Minimum pairs

This approach required storing two values in each slot of the underlying Stack.
Sometimes though, the minimum values are very repetitive.
Do we actually need to store the same minimum value over and over again?
We can solve it by using 2 Stack (see solution above)

time is O(1)
space is O(n)
*/

class MinStackMinPairs {
  constructor() {
    this.elements = [];
  }

  /**
    @param {number} item
    @return {void}
 */
  push(item) {
    this.elements.push({
      value: item,
      min: this.elements.length === 0 ? item : Math.min(item, this.getMin())
    })
  }

  pop() {
    this.elements.pop();
  }

  top() {
    return this.elements[this.elements.length - 1].value;
  }

  getMin() {
    return this.elements[this.elements.length - 1].min
  }
}

/*
  Approach 3: Improved 2 Stacks

  In the first approach, we pushed a new number onto the min-tracker Stack if,
  and only if, it was less than or equal to the current minimum.
  One downside of this solution is that if the same number is pushed repeatedly into MinStack,
  and that number also happens to be the current minimum,
  there'll be a lot of needless repetition on the min-tracker Stack.
  Recall that we put this repetition in to prevent a bug from occurring (refer to Approach 1).

  An improvement is to put pairs onto the min-tracker Stack.
  The first value of the pair would be the same as before,
  and the second value would be how many times that minimum was repeated.
*/

class MinStackUseTwoStack {
  constructor() {
    this.stack = [];
    this.minStack = [];

  }

  push(item) {
    // We always put the number onto the main stack.
    this.stack.push(item);

    // If the min stack is empty, or this number is smaller than
    // the top of the min stack, put it on with a count of 1.
    if (this.minStack.length === 0 || item < this.minStack[this.minStack.length - 1][0]) {
      this.minStack.push([item, 1])
    }

    // Else if this number is equal to what's currently at the top
    // of the min stack, then increment the count at the top by 1.
    else if (item === this.minStack[this.minStack.length - 1][0]) {
      this.minStack[this.minStack.length - 1][1]++;
    }
  }

  pop() {
    // If the top of min stack is the same as the top of stack
    // then we need to decrement the count at the top by 1.
    if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1][0]) {
      this.minStack[this.minStack.length - 1][1]--;
    }

    // If the count at the top of min stack is now 0, then remove
    // that value as we're done with it.
    if (this.minStack[this.minStack.length - 1][1] === 0) {
      this.minStack.pop();
    }

    // and like before, pop the top of the main stack.
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1][0];
  }
}

/*
  todo
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

export {
  MinStack,
  MinStackMinPairs,
  MinStackUseTwoStack
}
