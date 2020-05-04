import { canConstruct } from './383-ransom-note';

describe('ransom note test case', () => {
  it('false cases', () => {
    expect(canConstruct("a", "b")).toBeFalsy();
    expect(canConstruct("aa", "ab")).toBeFalsy();
  });

  it('true case', () => {
    expect(canConstruct("aa", "aab")).toBeTruthy();
  });
});
