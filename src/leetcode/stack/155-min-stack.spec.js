import {
  MinStack,
  MinStackUseTwoStack,
  MinStackMinPairs,
} from './155-min-stack';

describe('min stack use 2 stacks solution', () => {
  let newStack;
  beforeEach(() => {
    newStack = new MinStack();
  });

  it('push method', () => {
    newStack.push(-2);
    newStack.push(0);
    expect(newStack.stack.length).toEqual(2);
    expect(newStack.minStack.length).toEqual(1);
    expect(newStack.minStack).toEqual([-2]);
  });

  it('getMin() and top()', () => {
    newStack.push(-2);
    newStack.push(0);
    newStack.push(-3);
    expect(newStack.getMin()).toEqual(-3);
    newStack.pop();
    newStack.top();
    expect(newStack.top()).toEqual(0);
    expect(newStack.getMin()).toEqual(-2);
  });

  it('pop()', () => {
    newStack.push(-2);
    newStack.push(0);
    newStack.push(-3);
    newStack.pop();
    expect(newStack.top()).toEqual(0);
  });
});

describe('min stack improved 2 stacks solution', () => {
  let minStack;
  beforeEach(() => {
    minStack = new MinStackUseTwoStack();
  });

  it('push method', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);
    minStack.pop();
    expect(minStack.top()).toEqual(0);
    expect(minStack.getMin()).toEqual(-2);
  });

  it('getMin() and top()', () => {
    minStack.push(2);
    minStack.push(-2);
    minStack.push(-2);
    expect(minStack.getMin()).toEqual(-2);
    minStack.pop();
    minStack.top();
    expect(minStack.top()).toEqual(-2);
    expect(minStack.getMin()).toEqual(-2);
  });

  it('pop()', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-2);
    minStack.push(-2);
    minStack.pop();
    expect(minStack.top()).toEqual(-2);
  });
});


describe('min stack use min value pairs', () => {
  let minStack;
  beforeEach(() => {
    minStack = new MinStackMinPairs();
  });

  it('push method', () => {
    minStack.push(-2);
    minStack.push(0);
    expect(minStack.elements.length).toEqual(2);
  });

  it('getMin() and top()', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);
    minStack.pop();
    minStack.top();
    expect(minStack.top()).toEqual(0);
    expect(minStack.getMin()).toEqual(-2);
  });

  it('pop()', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.pop();
    expect(minStack.top()).toEqual(0);
  });
});
