/*
Leetcode
1344 Angle between hands of clock
medium

Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed
between the hour and the minute hand.

Example 1:
Input: hour = 12, minutes = 30
Output: 165

Example 2:
Input: hour = 3, minutes = 30
Output: 75

Example 3:
Input: hour = 3, minutes = 15
Output: 7.5

Constraints:
1 <= hour <= 12
0 <= minutes <= 59
Answers within 10^-5 of the actual value will be accepted as correct.

Hint 1
The tricky part is determining how the minute hand affects the position of the hour hand.

Hint 2
Calculate the angles separately then find the difference.
*/

/*
Approach Math

If a clock reads 8:15 pm, what angle do the hands make?
A clock is a circle, and a circle is always contains 360 degrees.
Since there are 60 minutes on a clock, each minute mark as 6 degrees
360 / 60 = 6 degrees per Minute
15 min * 6 = 90 degrees

Since there 12 hours on the clock, each hour mark as 30 degrees
360 / 12 = 30 degrees
8 hour * 30 = 240 degrees

However, the hour hand will actually be between the 8 and 9, since we are looking
at 8:15 rather that an absolute hour mark. 15 minutes is equal to 1/4 of an hour.
use the same equation to find the additional position of hour hand
240 + (1/4)*30 = 240 + 7.5 = 247.5

We are looking for the angle between the two hands of the clock. The will be equal
to the difference between the 2 angle measures
247.5 - 90 = 157.7

Time and space is O(1)
*/
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  // angle = 360
  // hours = 12 in 360
  // minutes = 60 in 360
  const angleInOneHour = 360 / 12; // = 30
  const angleInOneMinute = 360 / 60; // = 6 degrees per Minute

  let hoursAngle = (hour + minutes / 60) * angleInOneHour;
  let minutesAngle = minutes * angleInOneMinute;

  // We need the absolute difference between those two
  // As we can easily see when looking at a clock there are two different angles
  // between the hands:
  // The minimum angle on one side is between 0° and 180°.
  // The maximum angle on the other side is between 180° and 360°.
  // We need the minimum angle. If our formula returned a number above 180° we
  // got the maximum angle.
  // We can calculate the minimum angle by subtracting the maximum angle from 360°.
  let diff = Math.abs(hoursAngle - minutesAngle);

  // or return diff < 180 ? diff : 360 - diff;
  return Math.min(diff, 360 - diff);
};

// console.log('angleClock', angleClock(5,15))
// console.log('angleClock', angleClock(12,30)) // 165
// console.log('angleClock', angleClock(3,30)) // 75

export {
  angleClock
}
