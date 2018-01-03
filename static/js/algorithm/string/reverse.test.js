import { reverseWithDecrementingLForLoop } from './reverse';

describe('reverse a string test case', () => {

    it('string', ()  => {
        expect(reverseWithDecrementingLForLoop('hello')).toEqual('olleh');
    });

    it('string with capilatize', () => {
        expect(reverseWithDecrementingLForLoop('Greetings from Earth')).toEqual('htrae morf sgniteerg');
    });
});

