import {
  // floodFill,
  //floodFillUseHelper as floodFill,
  //floodFillBFS as floodFill,
  floodFillDFS as floodFill
} from './733-flood-fill';

describe('flood fill algorithm test case', () => {
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

  it('2 dimensional array', () => {
    expect(floodFill(input1, 1, 1, 2)).toEqual(output1);
    expect(floodFill(input2, 1, 1, 3)).toEqual(output2);
  });
});
