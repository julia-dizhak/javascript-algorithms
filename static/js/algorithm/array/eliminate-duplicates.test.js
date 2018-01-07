import { eliminateDuplicates } from './eliminate-duplicates';

describe('eliminate duplicates in array test', () => {

    it('several duplicates', ()=> {
        let arr = [4,3,1,11,2,7,8,2,3,2,1,1,1],
            output = [4,3,1,11,2,7,8];

        expect(eliminateDuplicates(arr)).toEqual(output);
    });

    it('for empty array', () => {
        expect(eliminateDuplicates([])).toEqual([]);
    });

    it('only duplicates', () => {
        expect(eliminateDuplicates([1, 1, 1, 1, 1, 1])).toEqual([1]);
    });

    it('no duplicates', () => {
        expect(eliminateDuplicates([1, 2, 4, 3, 7, 8, 9])).toEqual([1, 2, 4, 3, 7, 8, 9]);
    });

});
