import {
  reverse,
  Node
} from './206-reverse-linked-list';

describe('reverse linked list test case', () => {

  it('linked list is null', () => {
    let list = new Node(null);
    list = reverse(list);
    expect(list.val).toEqual(null);
    expect(list.next).toEqual(null);
  });

  it('linked list consist only one node', () => {
    let list = new Node(1);
    list = reverse(list);
    expect(list.val).toEqual(1);
  });

  it('linked list consist 2 nodes', () => {
    let list = new Node(1);
    list.next = new Node(2);
    list = reverse(list);
    expect(list.val).toEqual(2);
    expect(list.next.val).toEqual(1);
    expect(list.next.next).toEqual(null);
  });

  it('reverse list 1->2->3', () => {
    let list = new Node(1);
    list.next = new Node(2);
    list.next.next = new Node(3);

    list = reverse(list);
    expect(list.val).toEqual(3);
    expect(list.next.val).toEqual(2);
    expect(list.next.next.val).toEqual(1);
    expect(list.next.next.next).toEqual(null);
  });

  it('reverse list 1->2->3->4', () => {
    let list = new Node(1);
    list.next = new Node(2);
    list.next.next = new Node(3);
    list.next.next.next = new Node(4);

    list = reverse(list);
    expect(list.val).toEqual(4);
    expect(list.next.val).toEqual(3);
    expect(list.next.next.val).toEqual(2);
    expect(list.next.next.next.val).toEqual(1);
    expect(list.next.next.next.next).toEqual(null);
  });

  it('reverse list 1->2->3->4->5', () => {
    let list = new Node(1);
    list.next = new Node(2);
    list.next.next = new Node(3);
    list.next.next.next = new Node(4);
    list.next.next.next.next = new Node(5);

    list = reverse(list);
    expect(list.val).toEqual(5);
    expect(list.next.val).toEqual(4);
    expect(list.next.next.val).toEqual(3);
    expect(list.next.next.next.val).toEqual(2);
    expect(list.next.next.next.next.val).toEqual(1);
    expect(list.next.next.next.next.next).toEqual(null);
  });

});
