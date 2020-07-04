import {
  Stack
  //StackVariant2 as Stack
 } from './stack-use-array';

describe('stack implemented by an array test case', () => {
  let book;
  beforeEach(() => {
    book = new Stack();
  });

  it('push method', () => {
    book.push('Oathbringer')
    expect(book.stack.length).toEqual(1);
    expect(book.stack).toEqual(['Oathbringer']);
    book.push('The Stand');
    expect(book.stack).toEqual(['Oathbringer', 'The Stand']);
  });

  it('pop', () => {
    book.push('Oathbringer');
    book.push('The Stand');
    book.pop();
    expect(book.stack).toEqual(['Oathbringer']);
  });

  it('peek', () => {
    book.push('Oathbringer');
    book.push('The Stand');
    book.pop();
    book.push('test');
    expect(book.peek()).toEqual('test');
  });

  it('isEmpty method', () => {
    book.push('Oathbringer');
    book.push('The Stand');
    book.pop();
    book.pop();
    expect(book.isEmpty()).toBeTruthy();
    book.push('test');
    expect(book.isEmpty()).toBeFalsy();
  });

  it('get length', () => {
    book.push('Oathbringer');
    book.push('The Stand');
    book.pop();
    expect(book.length).toEqual(1);
  });

});
