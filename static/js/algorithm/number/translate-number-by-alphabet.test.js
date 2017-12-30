import { generateHeadAndTail, solutions, translateByAlphabetCode } from './translate-number-by-alphabet';

describe('test assignment to which translates list of numbers to a string', ()=>{

    it('generateHeadAndTail function', ()  => {
        expect(generateHeadAndTail([[1],[2]])).toEqual([[[1, 2], []]]);
        expect(generateHeadAndTail([[1],[2, 3]])).toEqual([[[1, 2], [3]], [[1, 23], []]]);

    });

    it('solution function', ()=> {
       const
           expectedLength3 = [ [12, 3], [1, 23], [1, 2, 3] ],
           expectedLength2 = [ [12], [ 1, 2] ];

       expect(solutions([1,2,3])).toEqual(expectedLength3);
       expect(solutions([1,2])).toEqual(expectedLength2);
    });

    it('with translateByAlphabetCode', ()=> {
        const
            expected = ['abc'],
            solutionsList = translateByAlphabetCode(solutions([1, 2, 3]));

        expect(solutionsList).toContain('abc');
        expect(solutionsList).toContain('lc');
        expect(solutionsList).toContain('aw');
    });
});
