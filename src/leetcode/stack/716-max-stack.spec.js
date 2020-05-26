import {
  MaxStack
} from './716-max-stack';

describe('max stack, approach 2 stacks', () => {
  let newStack;
  beforeEach(() => {
    newStack = new MaxStack();
  });

  it('push method', () => {
    newStack.push(5);
    newStack.push(1);
    newStack.push(5);
    expect(newStack.stack.length).toEqual(3);
    expect(newStack.maxStack.length).toEqual(3);
  });

  it('popMax() and top()', () => {
    newStack.push(5);
    newStack.push(1);
    newStack.push(5);
    newStack.top();
    expect(newStack.top()).toEqual(5);
    newStack.popMax();
    expect(newStack.popMax()).toEqual(5);
  });

  it('peekMax()', () => {
    newStack.push(5);
    newStack.push(1);
    newStack.push(5);
    newStack.top();
    newStack.popMax();
    newStack.top();
    newStack.peekMax();
    newStack.pop();
    expect(newStack.top()).toEqual(5);
  });
});
