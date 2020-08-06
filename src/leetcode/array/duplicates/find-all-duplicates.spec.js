import {
  findAllDuplicates
} from './find-all-duplicates';

describe('find all duplicates in array test case', () => {
  // it('array is undefined or empty', () => {
  //   expect(findAllDuplicates(undefined)).toEqual(-1);
  //   expect(findAllDuplicates([])).toEqual(-1);
  // });

  it('there are 2 duplicates', () => {
    expect(findAllDuplicates([4,3,2,7,8,2,3,1])).toEqual([2,3]);
  });

});
