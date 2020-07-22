import {
  exist,
} from './79-word-search';

describe('word search', () => {
  let board;
  beforeEach(() => {
    board = [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ]
  });

  it('word1 exist', () => {
    let word = 'ABCCED';
    expect(exist(board, word)).toBeTruthy()
  });

  it('word2 exist', () => {
    let word = 'SEE';
    expect(exist(board, word)).toBeTruthy()
  });

  it('word does not exist', () => {
    let word = 'ABCB';
    expect(exist(board, word)).toBeFalsy()
  });
});
