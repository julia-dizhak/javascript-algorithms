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

  it('deleteMax', () => {
    heap.insert(100);
    heap.insert(20);
    heap.insert(80);
    heap.insert(30);
    heap.insert(70);
    heap.insert(40);
    expect(heap.values.length).toEqual(6);
    const popped1 = heap.deleteMax();
    expect(popped1).toEqual(100);
    expect(heap.values).toEqual([80, 70, 40, 20, 30]);
    expect(heap.values.length).toEqual(5);
    const popped2 = heap.deleteMax();
    expect(popped2).toEqual(80);
    expect(heap.values).toEqual([70, 30, 40, 20]);
  });
});
