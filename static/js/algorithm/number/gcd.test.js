import { greatestCommonDivisor } from './gcd';

describe('greatest common divisor test case', () => {

    it('trick case: a = b', ()  => {
        expect(greatestCommonDivisor(3, 3)).toEqual(3);
    });

    it('first argument is a prime', () => {
        expect(greatestCommonDivisor(37, 600)).toEqual(1);
    });

    it('one is multiplum of other', () => {
        expect(greatestCommonDivisor(20, 100)).toEqual(20);
    });

    it('straight case', () => {
        expect(greatestCommonDivisor(624129, 2061517)).toEqual(18913);
    });
});

