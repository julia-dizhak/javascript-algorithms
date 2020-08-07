import {
  //findAllDuplicates,
  //findAllDuplicates1 as findAllDuplicates,
  //findAllDuplicates2 as findAllDuplicates,

  //findAllDuplicatesUseHash as findAllDuplicates,
  //findAllDuplicatesSort as findAllDuplicates,
  findAllDuplicatesUseArray as findAllDuplicates
} from './442-find-all-duplicates';

describe('find all duplicates in array test case', () => {
  // it('array is undefined or empty', () => {
  //   expect(findAllDuplicates([])).toEqual(-1);
  // });

  it('there are 2 duplicates', () => {
    expect(findAllDuplicates([1,1])).toEqual([1]);
    expect(findAllDuplicates([2,2])).toEqual([2]);
    expect(findAllDuplicates([4,3,2,7,8,2,3,1])).toEqual([2,3]);
    expect(findAllDuplicates([4,3,2,7,2,4,1])).toEqual([2,4]);
    expect(findAllDuplicates([4,3,2,7,8,2,3,1])).toEqual([2,3]);
  });

});
