import {
  MaxBinaryHeap,
 } from './max-binary-heap';

describe('Max Binary Heap test case', () => {
  let heap;
  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  it('insert node at the end', () => {
    heap.insertOntoEnd(100);
    heap.insertOntoEnd(20);
    heap.insertOntoEnd(80);
    heap.insertOntoEnd(30);
    heap.insertOntoEnd(70);
    heap.insertOntoEnd(40);
    //expect(heap.size).toEqual(6);
    expect(heap.values.length).toEqual(6);
    expect(heap.values).toEqual([100, 70, 80, 20, 30, 40]);
  });

  it('insert node', () => {
    heap.insert(100);
    heap.insert(20);
    heap.insert(80);
    heap.insert(30);
    heap.insert(70);
    heap.insert(40);
    expect(heap.values.length).toEqual(6);
    expect(heap.values).toEqual([100, 70, 80, 20, 30, 40]);
  });

  xit('dequeue method', () => {

  });

  xit('peek', () => {
    // queue.enqueue(0);
    // queue.enqueue(1);
    // queue.enqueue(2);
    // expect(queue.peek()).toEqual(0);
    // queue.enqueue(3);
    // expect(queue.peek()).toEqual(0);
    // queue.dequeue();
    // expect(queue.peek()).toEqual(1);
    // queue.dequeue();
    // expect(queue.peek()).toEqual(2);
    // queue.dequeue();
    // expect(queue.peek()).toEqual(3);
    // expect(queue.stackNewest).toEqual([]);
    // expect(queue.stackOldest).toEqual([3]);
  });
});
