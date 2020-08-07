import {
  Trie
 } from './implementation-Trie';

describe('Trie api: insert, search, remove test case', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
  });

  it('insert method', () => {
    trie.insert('bad');
    trie.insert('ball');
    trie.insert('dad');

    expect(trie.search('bad')).toBeTruthy();
    expect(trie.search('ba')).toBeFalsy();
    expect(trie.search('ball')).toBeTruthy();
  });

});
