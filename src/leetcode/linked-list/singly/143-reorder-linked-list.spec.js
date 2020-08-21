import {
  //reorderList,
  reorderListBruteForce as reorderList,
  Node
} from './143-reorder-linked-list';

describe('reorder singly linked list test case', () => {

  it('linked list is null', () => {
    let list = new Node(null);
    reorderList(list);
    expect(list.val).toEqual(null);
    expect(list.next).toEqual(null);
  });

  it('linked list consist only one node', () => {
    let list = new Node(1);
    reorderList(list);
    expect(list.val).toEqual(1);
  });

  it('linked list consist 2 nodes', () => {
    let list = new Node(1);
    list.next = new Node(2);
    reorderList(list);
    expect(list.val).toEqual(1);
    expect(list.next.val).toEqual(2);
    expect(list.next.next).toEqual(null);
  });

  it('reorder list 1->2->3', () => {
    let list = new Node(1);
    list.next = new Node(2);
    list.next.next = new Node(3);

    reorderList(list);
    expect(list.val).toEqual(1);
    expect(list.next.val).toEqual(3);
    expect(list.next.next.val).toEqual(2);
    expect(list.next.next.next).toEqual(null);
  });

  it('reorder list 1->2->3->4', () => {
    let list = new Node(1);
    list.next = new Node(2);
    list.next.next = new Node(3);
    list.next.next.next = new Node(4);

    reorderList(list);
    expect(list.val).toEqual(1);
    expect(list.next.val).toEqual(4);
    expect(list.next.next.val).toEqual(2);
    expect(list.next.next.next.val).toEqual(3);
    expect(list.next.next.next.next).toEqual(null);
  });

  it('reorder list 1->2->3->4->5', () => {
    let list = new Node(1);
    list.next = new Node(2);
    list.next.next = new Node(3);
    list.next.next.next = new Node(4);
    list.next.next.next.next = new Node(5);

    reorderList(list);
    expect(list.val).toEqual(1);
    expect(list.next.val).toEqual(5);
    expect(list.next.next.val).toEqual(2);
    expect(list.next.next.next.val).toEqual(4);
    expect(list.next.next.next.next.val).toEqual(3);
    expect(list.next.next.next.next.next).toEqual(null);
  });

});
