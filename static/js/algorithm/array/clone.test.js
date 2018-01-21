import { cloneWithSliceMethod, cloneWithForLoop, cloneWithForLoopFixedSize, cloneDeepWithSpread, cloneDeepJson } from './clone';

describe('clone arrays test case', () => {

    it('for empty array', ()=> {
        let clone = [];

        expect(cloneWithSliceMethod(clone)).toEqual(clone);
        expect(cloneWithForLoop(clone)).toEqual(clone);
        expect(cloneWithForLoopFixedSize(clone)).toEqual(clone);
    });

    it('for array with one element', () => {
        let clone = [1];

        expect(cloneWithSliceMethod(clone)).toEqual(clone);
        expect(cloneWithForLoop(clone)).toEqual(clone);
        expect(cloneWithForLoopFixedSize(clone)).toEqual(clone);
    });

    it('for array of integers', () => {
        let original = [1, 2, 3, 4, 5];
        const cloned = cloneWithSliceMethod(original);
        expect(cloned).toEqual(original);

        original.push(6);
        expect(original.length).toEqual(6);
        expect(cloned.length).toEqual(5); // ensure that cloned array didn't change
    });

    it('for array of arrays', () => {
        let original = [[1, 2, 3], [2]],
            cloned = cloneDeepWithSpread(original),
            cloned1 = cloneDeepJson(original);

        original[0]= 1;
        original[1] = 'string';

        expect(cloned).toEqual([[1, 2, 3], [2]]);
        expect(cloned1).toEqual([[1, 2, 3], [2]]);
    });

    it('for array of objects', () => {
        let original = [{a: 'test', b: 2}],
            cloned = cloneDeepWithSpread(original);

        original.a = 'test1';

        expect(cloned).toEqual([{a: 'test', b: 2}]);
    });

    it('for array of strings', () => {
        let clone = ['test', 'test1', 1];

        expect(cloneWithSliceMethod(clone)).toEqual(clone);
        expect(cloneWithForLoop(clone)).toEqual(clone);
        expect(cloneWithForLoopFixedSize(clone)).toEqual(clone);
    });
});
