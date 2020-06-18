import {
  solve,
} from './130-surrounded-regions';

describe('surrounded regions test case', () => {
  let input1, input2;
  let output1, output2;

  beforeEach(() => {
    input1 = [
      [1,1,1],
      [1,1,0],
      [1,0,1]
    ];
    input2 = [
      [1,1,1],
      [1,1,0],
      [0,0,1]
    ];
    output1 = [
      [2,2,2],
      [2,2,0],
      [2,0,1]
    ];
    output2 = [
      [3,3,3],
      [3,3,0],
      [0,0,1]
    ]
  });

  it('test', () => {
    expect(solve(input1)).toEqual(undefined);
  });
});
