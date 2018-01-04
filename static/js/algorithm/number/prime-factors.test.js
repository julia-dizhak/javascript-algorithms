import { primeFactors} from './prime-factors';

describe('prime factors test case', () => {

    it('number is 2', ()  => {
        expect(primeFactors(98)).toBe([2,7]);
    });

    it('number is even', () => {
        expect(primeFactors(6)).toEqual([2, 3]);
    });

    it('number is odd', () => {
        expect(primeFactors(11)).toEqual([11]);
    });
});

