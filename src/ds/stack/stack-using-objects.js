/**
 * Stack using objects
 * The problem that hash doesn't have last element
 * Idea have a loop for prop in k which is an object
 *  for prop in k
 *    if !k[x-i]
 *      k[x-i] = a
 *      break;
 * @param {*} capacity
 */
function StackObj(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
}

// O(1)
StackObj.prototype.push = function(value) {
  if (this.count < this.capacity) {
    this.storage[this.count++] = value;
    return this.count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.'
}

// O(1)
StackObj.prototype.pop = function() {
  if (this.count === 0) {
    return 'No element inside the stack. Add element before popping.'
  }

  const value = this.storage[this.count--];
  delete this.storage[this.count];
  if (this.count < 0) {
    this.count = 0;
  }
  return value;
}

// O(1)
StackObj.prototype.count = function() {
  return this.count;
}

const myStack = new StackObj();
myStack.push('a');
myStack.push('b');
myStack.push('c');
// myStack.pop();
// console.log('my stack pop', myStack.pop());
// console.log('my stack', myStack);

// todo
// add and remove from top
// isEmpty
// peek
// push
// pop

export { StackObj }
