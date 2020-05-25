import { MinStack } from './155-min-stack';

describe('min stack test case', () => {
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
