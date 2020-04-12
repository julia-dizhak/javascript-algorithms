import { findIndex } from './find-index';

describe('findIndex in array test case', () => {

  it('search query exists', () => {
    expect(findIndex([2,5,6], 2)).toEqual(0);
  });

  it('search query does not exist', () => {
    expect(findIndex([0, 1, 3, 4], -1)).toEqual(undefined);
  })
});

