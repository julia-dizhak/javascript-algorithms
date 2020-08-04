/*
Approach implementation of Stack via Array

time: every operation takes constant time
space: less wasted time in comparison with Linked list
*/
class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  isEmpty() {
    // helper method
    // returns true if the stack is empty
    return this.length === 0;
  }

  push(item) {
    // inserts the element into the top of the stack
    this.stack.push(item);
  }

  pop() {
    // removes the element from the top of the stack and return that element
    if (this.isEmpty()) {
      throw new Error('stack is empty');
    }
    return this.stack.pop();
  }

  peek() {
    // get the top element from the stack
    return this.stack[this.stack.length - 1];
  }

  clear() {
    return []
  }

  print() {
    console.log('stack', this.stack.toString())
  }
}

/*
Implementation of Stack use Array
variant 2
*/

class StackVariant2 {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  length() {
    return this.top;
  }

  push(element) {
    this.stack[this.top++] = element;
  }

  pop() {
    return this.stack[--this.top];
  }

  peek() {
    return this.stack[this.top - 1];
  }

  clear() {
    this.top = 0;
  }
}

// tests
// const stack = new Stack();
// //const stack2 = new StackVariant2();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(1);
// stack.pop();
// stack.pop();
// stack.peek()
// stack.print();

export {
  Stack,
  StackVariant2
}
