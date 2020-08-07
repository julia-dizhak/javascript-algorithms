import {
  // Queue,
  QueueUse2Pointers as Queue
 } from './queue-use-linked-list';

describe('Queue via Linked List test case', () => {
  let persons;
  beforeEach(() => {
    persons = new Queue();
  });

  it('enqueue method', () => {
    persons.enqueue('first');
    persons.enqueue('second');
    expect(persons.length).toEqual(2);
    persons.enqueue('third');
    expect(persons.length).toEqual(3);
    expect(persons.head.val).toEqual('first');
    expect(persons.head.next.val).toEqual('second');
    expect(persons.head.next.next.val).toEqual('third');
    expect(persons.getHead()).toEqual('first');
  });

  it('dequeue', () => {
    persons.enqueue('first');
    persons.enqueue('second');
    expect(persons.length).toEqual(2);
    persons.dequeue();
    expect(persons.length).toEqual(1);
    expect(persons.getHead()).toEqual('second');
    persons.enqueue('third');
    persons.enqueue('fourth');
    persons.dequeue();
    expect(persons.getHead()).toEqual('third');
    expect(persons.length).toEqual(2);
    persons.dequeue();
    expect(persons.isEmpty()).toBeFalsy();
    persons.dequeue();
    expect(persons.isEmpty()).toBeTruthy();
  });

  it('peek', () => {
    persons.enqueue('first');
    persons.enqueue('second');
    expect(persons.peek()).toEqual('first');
    persons.dequeue();
    expect(persons.peek()).toEqual('second');
    persons.dequeue();
    expect(persons.peek()).toEqual('Queue is empty!');
  });
});
