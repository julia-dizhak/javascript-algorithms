import { Stack } from './stack-use-string';

describe('stack use a string implementation, test case', () => {
  let str;

  beforeEach(() => {
    str = new Stack();
  });

  it('push', () => {
    str.push('a');
    expect(str.storage.length).toEqual(4);
    str.push('b');
    expect(str.peek()).toEqual('b');
  });

  it('pop', () => {
    str.push('a');
    str.push('b');
    expect(str.pop()).toEqual('b');
    expect(str.pop()).toEqual('a');
  });

  it('peek', () => {
    str.push('a');
    str.push('b');
    str.pop();
    str.push('c');
    expect(str.peek()).toEqual('c');
  });

  it('isEmpty method', () => {
    str.push('a');
    str.pop()
    expect(str.isEmpty()).toBeTruthy();
    str.push('test');
    expect(str.isEmpty()).toBeFalsy();
  });

});
