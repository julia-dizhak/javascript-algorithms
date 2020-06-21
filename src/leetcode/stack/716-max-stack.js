/*
  Leetcode
  716 Max Stack

  Design a max stack that supports push, pop, top, peekMax and popMax.

  push(x) - Push element x onto stack.
  pop() - Remove the element on top of the stack and return it.
  top() - Get the element on the top.
  peekMax() - Retrieve the maximum element in the stack.
  popMax() - Retrieve the maximum element in the stack, and remove it.
  If you find more than one maximum elements, only remove the top-most one.

  Example 1:

  MaxStack stack = new MaxStack();
  stack.push(5);
  stack.push(1);
  stack.push(5);
  stack.top(); -> 5
  stack.popMax(); -> 5
  stack.top(); -> 1
  stack.peekMax(); -> 5
  stack.pop(); -> 1
  stack.top(); -> 5

  Note:
  -1e7 <= x <= 1e7
  Number of operations won't exceed 10000.
  The last four operations won't be called when stack is empty.

  Can we design operations in O(1) like the min stack problem? No.
  “Because if it were, you could use this data structure to sort an array of numbers in O(n) time.
  So, at the very least, either push(x) or popMax() must be O(log n)”
*/

/*
Approach Two Stacks

For peekMax, we remember the largest value we've seen on the side.
For example if we add [2, 1, 5, 3, 9, 7], we'll remember [2, 2, 5, 5, 9, 9].

This works seamlessly with pop operations, and also it's easy to compute:
it's just the maximum of the element we are adding and the previous maximum.

For popMax, we know what the current maximum (peekMax) is.
We can pop until we find that maximum, then push the popped elements back on
the stack.

Complexity Analysis
Time Complexity: O(N) for the popMax operation, and O(1) for the other operations,
where N is the number of operations performed.

Space Complexity: O(N), the maximum size of the stack.
*/

class MaxStack {
  constructor() {
    this.stack = [];
    this.maxStack = []
  }

  push(item) {
    this.stack.push(item);

    const max = this.maxStack.length === 0 ? item : this.peekMax();
    this.maxStack.push(max > item ? max : item);
  }

  pop() {
    this.maxStack.pop();
    return this.stack.pop();
  }

  /**
  * @return {number}
  * popMax() - Retrieve the maximum element in the stack, and remove it.
  */
  popMax() {
    // for popMax, we know what the current maximum (peekMax) is.
    // We can pop in original stack until we find that maximum,
    // then push the popped elements back on the stack.
    const temp = [];
    while (this.top() !== this.peekMax()) {
      temp.unshift(this.stack.pop());
      this.maxStack.pop();
    }

    const output = this.pop();
    for (const val of temp) {
      this.push(val)
    }

    return output;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  peekMax() {
    return this.maxStack[this.maxStack.length - 1];
  }
}

const max = new MaxStack();
max.push(5);
max.push(3);
max.push(6);
max.push(5);
max.push(3);
max.popMax()
//console.log('max', max)

/*
  Todo
  There is an approach
  Approach #2: Double Linked List + TreeMap [Accepted]
*/

export { MaxStack }
