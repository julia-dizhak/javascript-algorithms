import { reverseWithDecrementingLForLoop, reverseWithRecursion } from './reverse';

describe('reverse a string test case', () => {

    it('string', ()  => {
        let str1 = 'hello',
            str2 = 'olleh';
        expect(reverseWithDecrementingLForLoop(str1)).toEqual(str2);
        expect(reverseWithRecursion(str1)).toEqual(str2);
    });

    it('string with capilatize', () => {
        let str1 = 'Greetings from Earth',
            str2 = 'htrae morf sgniteerg';
        expect(reverseWithDecrementingLForLoop(str1)).toEqual(str2);
        expect(reverseWithRecursion(str1)).toEqual(str2);
    });

    it('string is uppercase', () => {
        let str1 = 'NAME',
            str2 = 'eman';
        expect(reverseWithDecrementingLForLoop(str1)).toEqual(str2);
        expect(reverseWithRecursion(str1)).toEqual(str2);
    });
});

