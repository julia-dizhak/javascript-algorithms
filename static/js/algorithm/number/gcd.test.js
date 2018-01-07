import { greatestCommonDivisor, euclideanWithRecursion } from './gcd';

describe('greatest common divisor test case', () => {

    it('trick case: a = b', ()  => {
        let a = 3,
            b = 3,
            gcd = 3;

        expect(greatestCommonDivisor(a, b)).toEqual(gcd);
        expect(euclideanWithRecursion(a, b)).toEqual(gcd);
    });

    it('first argument is a prime', () => {
        let a = 73,
            b = 600,
            gcd = 1;

        expect(greatestCommonDivisor(a, b)).toEqual(gcd);
        expect(euclideanWithRecursion(a, b)).toEqual(gcd);
    });

    it('one is multiplum of other', () => {
        let a = 20,
            b = 100,
            gcd = 20;

        expect(greatestCommonDivisor(a, b)).toEqual(gcd);
        expect(euclideanWithRecursion(a, b)).toEqual(gcd);
    });

    it('straight case', () => {
        let a = 624129,
            b = 2061517,
            gcd = 18913;
        expect(greatestCommonDivisor(a, b)).toEqual(gcd);
        expect(greatestCommonDivisor(a, b)).toEqual(gcd);
    });
});

