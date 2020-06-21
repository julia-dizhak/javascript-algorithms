import {
  Stack
 } from './stack-use-linked-list';

describe('stack implemented via Linked List test case', () => {
  let plates;
  beforeEach(() => {
    plates = new Stack();
  });

  it('push method', () => {
    plates.push(1)
    expect(plates.length).toEqual(1);
    expect(plates.head.val).toEqual(1);
    plates.push(2);
    expect(plates.head.val).toEqual(2);
    expect(plates.head.next.val).toEqual(1);
    expect(plates.length).toEqual(2);
  });

  it('pop', () => {
    plates.push(1)
    plates.push(2);
    plates.push(3)
    expect(plates.length).toEqual(3);
    plates.pop();
    expect(plates.peek()).toEqual(2);
    expect(plates.length).toEqual(2);
  });

  it('peek', () => {
    plates.push(1);
    expect(plates.peek()).toEqual(1);
  });

  it('isEmpty method', () => {
    plates.push(1);
    plates.push(2);
    plates.pop();
    expect(plates.isEmpty()).toBeFalsy();
    // todo
    //plates.pop();
    //expect(plates.isEmpty()).toBeFalsy();
  });
});
