import {
  insertionSortList,
  //insertionSortList1 as insertionSortList,
  ListNode
} from './147-insertion-sort-list';

describe('insertion sort for linked list test case', () => {

  it('head is 4->2->1->3', () => {
    let head = new ListNode(4);
    head.next = new ListNode(2);
    head.next.next = new ListNode(1);
    head.next.next.next = new ListNode(3);
    const sorted = insertionSortList(head);

    expect(sorted.val).toEqual(1);
    expect(sorted.next.val).toEqual(2);
    expect(sorted.next.next.val).toEqual(3);
    expect(sorted.next.next.next.val).toEqual(4);
  });

  it('head is -1->5->3->4->0', () => {
    let head = new ListNode(-1);
    head.next = new ListNode(5);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(0);

    const sorted = insertionSortList(head);

    expect(sorted.val).toEqual(-1);
    expect(sorted.next.val).toEqual(0);
    expect(sorted.next.next.val).toEqual(3);
    expect(sorted.next.next.next.val).toEqual(4);
  });

});
