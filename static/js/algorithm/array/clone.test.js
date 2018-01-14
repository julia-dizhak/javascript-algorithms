import { cloneWithSliceMethod, cloneWithForLoop, cloneWithForLoopFixedSize } from './clone-array';

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

    it('for array arrays', () => {
        let clone = [[[2]]];

        expect(cloneWithSliceMethod(clone)).toEqual(clone);
        expect(cloneWithForLoop(clone)).toEqual(clone);
        expect(cloneWithForLoopFixedSize(clone)).toEqual(clone);
    });

    fit('for array of objects', () => {
        let clone = [{a: 'test', b: 2}];

        expect(cloneWithSliceMethod(clone)).toEqual(clone);
        expect(cloneWithForLoop(clone)).toEqual(clone);
        expect(cloneWithForLoopFixedSize(clone)).toEqual(clone);


        let bla = cloneWithForLoopFixedSize(clone);
        clone[0].a = 'ksdjflsjdf';
        expect(bla).toEqual([{a: 'test', b: 2}]);
    });

    it('for array of strings', () => {
        let clone = ['test', 'test1', 1];

        expect(cloneWithSliceMethod(clone)).toEqual(clone);
        expect(cloneWithForLoop(clone)).toEqual(clone);
        expect(cloneWithForLoopFixedSize(clone)).toEqual(clone);
    });
});
