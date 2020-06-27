import { finalPrices } from './1475-final-prices-with-special-discounts';

describe('finalPrices case', () => {
  it('arr exist', () => {
    expect(finalPrices([8,4,6,2,3])).toEqual([4,2,4,2,3]);
  })
});
