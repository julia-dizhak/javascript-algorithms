import { factorializeRecursion, factorializeWithWhileLoop, factorializeWithForLoop } from './factorialize';

describe('test assignment to which factorialize a number: return the factorial of the provided integer', ()=>{

    it('with recursion', ()=> {
        expect(factorializeRecursion(5)).toEqual(120);
        expect(factorializeRecursion(3)).toBe(6);
        expect(factorializeRecursion(1)).not.toBe(0);
    });

    it('with a while loop', ()=> {
        expect(factorializeWithWhileLoop(10)).toEqual(3628800);
    });

    it('with a for loop', ()=> {
        expect(factorializeWithForLoop(20)).toEqual(2432902008176640000);

    });
});
