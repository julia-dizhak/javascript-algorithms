import {
  HashSet,
  //HashSetVariant1 as HashSet
 } from './hashSet-use-object';

describe('hashSet test case', () => {
  let hash;
  beforeEach(() => {
    hash = new HashSet();
  });

  it('add method', () => {
    expect(hash.length).toEqual(0);
    hash.add(1);
    expect(hash.length).toEqual(1);
    hash.add(2);
    expect(hash.contains(1)).toBeTruthy();
    expect(hash.contains(3)).toBeFalsy();
    expect(hash.length).toEqual(2);
  });

  it('remove', () => {
    hash.add(1);
    hash.add(2);
    hash.remove(2);
    expect(hash.contains(2)).toBeFalsy();
    expect(hash.contains(1)).toBeTruthy();
    expect(hash.length).toEqual(1);
    hash.remove(1);
    hash.remove(1);
    hash.remove(1);
    hash.add(1);
    expect(hash.length).toEqual(1);
  });

  it('contains', () => {
    expect(hash.contains(1)).toBeFalsy();
    hash.add(1);
    expect(hash.contains(1)).toBeTruthy();
    expect(hash.contains(2)).toBeFalsy();
    hash.add(2);
    expect(hash.contains(1)).toBeTruthy();
    expect(hash.contains(2)).toBeTruthy();
    expect(hash.contains(3)).toBeFalsy();
    hash.remove(2);
    hash.remove(1);
    expect(hash.length).toEqual(0);
    expect(hash.isEmpty()).toBeTruthy();
    expect(hash.contains(2)).toBeFalsy();
    expect(hash.contains(1)).toBeFalsy();
  });

  it('isEmpty method', () => {
    expect(hash.isEmpty()).toBeTruthy();
    hash.add(1);
    expect(hash.isEmpty()).toBeFalsy();
  });

  it('get length', () => {
    expect(hash.length).toEqual(0);
    hash.add(1);
    hash.add(2);
    expect(hash.length).toEqual(2);
    hash.remove(2);
    hash.remove(3)
    expect(hash.length).toEqual(1);
  });

});
