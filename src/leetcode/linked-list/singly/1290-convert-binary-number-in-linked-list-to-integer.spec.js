import {
  //getDecimalValue,
  //getDecimalValue1 as getDecimalValue,
  //getDecimalValueBinary as getDecimalValue,
  //getDecimalValueBitManipulation as getDecimalValue,
  getDecimalValueBitManipulation1 as getDecimalValue,
  ListNode
} from './1290-convert-binary-number-in-linked-list-to-integer';

describe('convert binary number to integer test case', () => {

  it('head consist 1 element', () => {
    let head = new ListNode(0);
    const val = getDecimalValue(head);
    expect(val).toEqual(0);
  });

  it('head consist 2 zero elements', () => {
    let head = new ListNode(0);
    head.next = new ListNode(0);
    const val = getDecimalValue(head);
    expect(val).toEqual(0);
  });

  it('head consist more than 1 element', () => {
    let head = new ListNode(1);
    head.next = new ListNode(0);
    head.next.next = new ListNode(1)
    const val = getDecimalValue(head);
    expect(val).toEqual(5);
  });

});
