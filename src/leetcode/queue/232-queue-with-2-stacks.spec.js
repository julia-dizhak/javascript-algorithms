import {
  Queue,
 } from './232-queue-with-2-stacks';

describe('Queue via 2 Stacks test case', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it('enqueue method', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toEqual(3);
    expect(queue.stackNewest).toEqual([0,1,2]);
    expect(queue.stackOldest).toEqual([]);
    queue.enqueue(3);
    expect(queue.size()).toEqual(4);
  });

  it('peek', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.peek();
    expect(queue.peek()).toEqual(0);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.peek();
    expect(queue.peek()).toEqual(0);
    expect(queue.size()).toEqual(6);
  });

  it('dequeue method', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toEqual(3);
    expect(queue.stackNewest).toEqual([0,1,2]);
    expect(queue.stackOldest).toEqual([]);
    expect(queue.peek()).toEqual(0);
    queue.dequeue();
    expect(queue.stackNewest).toEqual([]);
    expect(queue.stackOldest).toEqual([2,1]);
    expect(queue.peek()).toEqual(1);
  });

  it('peek', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(0);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(0);
    queue.dequeue();
    expect(queue.peek()).toEqual(1);
    queue.dequeue();
    expect(queue.peek()).toEqual(2);
    queue.dequeue();
    expect(queue.peek()).toEqual(3);
    expect(queue.stackNewest).toEqual([]);
    expect(queue.stackOldest).toEqual([3]);
  });
});
