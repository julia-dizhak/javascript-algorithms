// implementation of stack use an array
class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    // helper method
    return this.stack.length === 0;
  }

  push(element) {
    // inserts the element into the top of the stack
    this.stack.push(element);
  }

  pop(element) {
    // removes the element from the top of the stack and return that element
    if (this.isEmpty()) {
      throw new Error('stack is empty');
      //return 'stack is empty'
    }
   // this.stack.shift(element);
    return this.stack.pop()
  }

  peek() {
    // get the top element from the stack
    return this.stack[this.stack.length - 1]
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.peek()
console.log('stack', stack)

export { Stack }

