import { mergeSortedArrays } from './merge-sorted-arrays';

describe('merge two sorted arrays test case', () => {

    it('for empty arrays', ()=> {
        expect(mergeSortedArrays([], [])).toEqual([]);
    });

    it('for non empty and empty arrays', () => {
        expect(mergeSortedArrays([1, 3, 8], [])).toEqual([1, 3, 8]);
    });

    it('for two arrays of the same size', () => {
        expect(mergeSortedArrays([1, 3, 8], [2, 4, 6])).toEqual([1, 2, 3, 4, 6, 8]);
    });

    it('for two arrays of different size', () => {
        expect(mergeSortedArrays([1, 2, 4], [3, 7, 8, 9])).toEqual([1, 2, 3, 4, 7, 8, 9]);
    });

});
