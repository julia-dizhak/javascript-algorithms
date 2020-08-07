import {
  Queue
 } from './queue-use-array';

describe('Queue implemented via an array test case', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it('enqueue method', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.queue.length).toEqual(3);
    expect(queue.queue).toEqual([1,2,3]);
  });

  it('dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.queue.length).toEqual(0);
    expect(queue.queue).toEqual([]);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.queue).toEqual([2]);
  });

  it('peek', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.peek()).toEqual(2);
  });
});
