import { comparators, data, dataSorted } from './comparators';

const arr = [
  ['amy', 100],
  ['david', 100],
  ['heraldo', 50],
  ['aakansha', 75],
  ['aleksa', 150],
]

const sortedArr = [
  ['aleksa', 150],
  ['amy', 100],
  ['david', 100],
  ['aakansha', 75],
  ['heraldo', 50],
]

describe('comparators', () => {
  it('empty data', () => {
    expect(comparators([])).toEqual([]);
  });

  it('with data variant 1', () => {
    expect(comparators(data)).toEqual(dataSorted);
  });

  it('array with 2 items', () => {
    expect(comparators(arr)).toEqual(sortedArr);
  });
});
