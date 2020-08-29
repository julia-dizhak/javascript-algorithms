import {
  mincostTickets,
  //mincostTicketsTrackCalendarDays as mincostTickets
} from './983-min-cost-tickets';

describe('mincostTickets test case', () => {

  // it('edge costs', () => {
  // });

  it('days and costs defined', () => {
    expect(mincostTickets([1,4,6,7,8,20], [2,7,15])).toEqual(11);
  });
});
