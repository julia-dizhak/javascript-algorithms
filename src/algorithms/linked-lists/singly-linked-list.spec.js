import { LinkedList, ListNode } from './singly-linked-list';

describe('singly linked list test case', () => {
  let list;
  let node;
  beforeEach(() => {
    list = new LinkedList();
    node = new ListNode();
  });

  it('size', () => {
    list.addAtHead(1);
    list.addAtHead(2);
    expect(list.size).toEqual(2);
    // let first = new ListNode();
    // first.val = 'to';
    // expect(first.next).toEqual(null);
    // let second = new ListNode();
    // second.val = 'be'
    // expect(first.next).toEqual('to');
    // expect(second.next).toEqual(null);
  });

  // it('pop', () => {
  //   book.push('Oathbringer');
  //   book.push('The Stand');
  //   book.pop();
  //   expect(book.stack).toEqual(['Oathbringer']);
  // });

  // it('peek', () => {
  //   book.push('Oathbringer');
  //   book.push('The Stand');
  //   book.pop();
  //   book.push('test');
  //   expect(book.peek()).toEqual('test');
  // });

  // it('isEmpty method', () => {
  //   book.push('Oathbringer');
  //   book.push('The Stand');
  //   book.pop();
  //   book.pop();
  //   expect(book.isEmpty()).toBeTruthy();
  //   book.push('test');
  //   expect(book.isEmpty()).toBeFalsy();
  // });

  // it('get length', () => {
  //   book.push('Oathbringer');
  //   book.push('The Stand');
  //   book.pop();
  //   expect(book.length).toEqual(1);
  // });

});
