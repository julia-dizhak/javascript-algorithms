import {
  defineNextGeneration,
  countTotalAmountAliveNeighbors
} from './generationInit';

describe('defineNextGeneration test case', () => {
  it('edge cases', () => {
    const prevState = [
      [false, false],
      [false, false]
    ];
    const state = [
      [false, false],
      [false, false]
    ];

    const prevState1 = [
      [true, true],
      [true, true]
    ];
    const state1 = [
      [true, true],
      [true, true]
    ];

    const prevState2 = [
      [true, true],
      [true, false]
    ];
    const state2 = [
      [true, true],
      [true, true]
    ];

    const prevState3 = [
      [false, false],
      [false, true]
    ];
    const state3 = [
      [false, false],
      [false, false]
    ];

    expect(defineNextGeneration(prevState)).toEqual(state);
    expect(defineNextGeneration(prevState1)).toEqual(state1);
    expect(defineNextGeneration(prevState2)).toEqual(state2);
    expect(defineNextGeneration(prevState3)).toEqual(state3);
  });

  it('case of 2', () => {
    const prevState = [
      [false, false],
      [false, true]
    ];
    const state = [
      [false, false],
      [false, false]
    ];
    expect(defineNextGeneration(prevState)).toEqual(state);
  });

  it('case of 3', () => {
    const prevState = [
      [true, true, true],
      [false, false, false],
      [false, false, true]
    ];
    const state = [
      [false, true, false],
      [false, false, true],
      [false, false, false]
    ];
    expect(defineNextGeneration(prevState)).toEqual(state);
  });

  it('case of 4', () => {
    const prevState = [
      [false, false, false, false],
      [false, true, true, false],
      [false, true, true, false],
      [false, false, false, false]
    ];
    expect(defineNextGeneration(prevState)).toEqual(prevState);

    const prevState1 = [
      [false, false, false, false],
      [false, true, true, false],
      [false, true, false, false],
      [false, false, false, false]
    ];
    expect(defineNextGeneration(prevState1)).toEqual(prevState);
  });
});

describe('countTotalAmountAliveNeighbors test case', () => {

  it('case of 2', () => {
    const state = [
      [false, false],
      [false, true]
    ];

    expect(countTotalAmountAliveNeighbors(state, 0, 0)).toEqual(1);
    expect(countTotalAmountAliveNeighbors(state, 1, 1)).toEqual(0);
  });

  it('case of 3', () => {
    const state = [
      [true, true, true],
      [false, false, false],
      [false, false, true]
    ];

    expect(countTotalAmountAliveNeighbors(state, 0, 0)).toEqual(1);
    expect(countTotalAmountAliveNeighbors(state, 0, 1)).toEqual(2);
    expect(countTotalAmountAliveNeighbors(state, 0, 2)).toEqual(1);

    expect(countTotalAmountAliveNeighbors(state, 1, 0)).toEqual(2);
    expect(countTotalAmountAliveNeighbors(state, 1, 1)).toEqual(4);
    expect(countTotalAmountAliveNeighbors(state, 1, 2)).toEqual(3);
  });

});