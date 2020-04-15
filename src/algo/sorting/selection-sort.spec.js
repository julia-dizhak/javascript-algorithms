import { selectionSort } from './selection-sort';

describe('selectionSort test case', () => {
  it('empty array', () => {
    expect(selectionSort([])).toEqual([]);
  });

  it('array with on element', () => {
    expect(selectionSort([1])).toEqual([1]);
  });

  it('array with 2 elements', ()=> {
    expect(selectionSort([2,1])).toEqual([1,2]);
  });

  it('unsorted arrays', ()=> {
    const a = [
      1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92
    ];
    const sorted = [
      1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643
    ]
    expect(selectionSort([4,3,1,2])).toEqual([1,2,3,4]);
    expect(selectionSort(a)).toEqual(sorted);
  });
});
