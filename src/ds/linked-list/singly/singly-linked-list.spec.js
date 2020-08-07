import { LinkedList } from './singly-linked-list';

describe('singly linked list test case', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it('size', () => {
    list.addAtHead(1);
    list.addAtHead(2);
    expect(list.size).toEqual(2);
  });

  it('addAtHead', () => {
    list.addAtHead(1);
    expect(list.head.val).toEqual(1);
    list.addAtHead(2);
    expect(list.head.val).toEqual(2);
  });

  it('addAtTail', () => {
    list.addAtTail(1);
    expect(list.head.val).toEqual(1);
    list.addAtTail(2);
    list.addAtTail(2);
    expect(list.head.next.val).toEqual(2);
    expect(list.head.next.next.val).toEqual(2);
  });

  it('addAtIndex', () => {
    list.addAtHead(2);
    list.addAtHead(3);
    list.addAtTail(1);
    expect(list.head.val).toEqual(3);
    list.addAtIndex(0, 0);
    expect(list.head.val).toEqual(0);
    list.addAtIndex(4, 5);
    expect(list.head.val).toEqual(0);
    expect(list.head.next.next.next.next.val).toEqual(5);
  });

  it('get', () => {
    list.addAtHead(0);
    list.addAtHead(1);
    list.get(0);
    expect(list.get(0)).toEqual(1);
  });

  it('list', () => {
    list.addAtHead(7);
    list.addAtHead(2);
    list.addAtHead(1);
    list.addAtIndex(3, 0);
    list.deleteAtIndex(2);
    list.addAtHead(6);
    list.addAtTail(4);
    list.get(4);
    expect(list.get(4)).toEqual(4);
    list.addAtHead(4);
    list.addAtIndex(5, 0);
    list.addAtHead(6);
  });

});
