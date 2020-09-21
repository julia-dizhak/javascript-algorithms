/*
Leetcode
Car pooling
You are driving a vehicle that has capacity empty seats initially available for 
passengers.  The vehicle only drives east (ie. it cannot turn around and drive west.)

Given a list of trips, trip[i] = [num_passengers, start_location, end_location] 
contains information about the i-th trip: the number of passengers that must be 
picked up, and the locations to pick them up and drop them off.  The locations 
are given as the number of kilometers due east from your vehicle's initial location.

Return true if and only if it is possible to pick up and drop off all passengers 
for all the given trips. 

Example 1:
Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

Example 2:
Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true

Example 3:
Input: trips = [[2,1,5],[3,5,7]], capacity = 3
Output: true

Example 4:
Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
Output: true

Hint
Sort the pickup and dropoff events by location, then process them in order.

Constraints:
trips.length <= 1000
trips[i].length == 3
1 <= trips[i][0] <= 100
0 <= trips[i][1] < trips[i][2] <= 1000
1 <= capacity <= 100000
*/

/*
Intuition
since we have only 1001 stops, we can just figure out how many people get it and out
in each location.

Solution
Process all trips, adding passenger count to start location, and removing it from 
the end location. After processing all trips, a positive value for specific location
tells that we are getting more passengers, negative - more empty seats.

Finally, scan all stops and check if we ever exceed our vehicle capacity.

time is O(n), n - number of trips + constant
space is constant O(m = 1001), m is number of stops, doesn't grow,
*/
let carPoolingCountStops = function(trips, capacity) {
  const stops = new Array(1001).fill(0); // constraint from desc

  for (const trip of trips) {
    stops[trip[1]] += trip[0];
    stops[trip[2]] -= trip[0];
  }

  for (let i = 1; capacity >= 0 && i < 1001; i++) {
    capacity -= stops[i];
  }
  return capacity >= 0;
}

// tests
//console.log('carPooling', carPooling([[2,1,5], [3,3,7]], 4));
//console.log('carPooling', carPoolingCountStops([[2,1,5], [3,3,7]], 5));
console.log('carPooling', carPoolingCountStops([[2,1,5], [3,3,7]], 3));
//console.log('carPooling', carPoolingCountStops([[3,2,7], [3,7,9], [8,3,9]], 11));

/*

Famous interval problem
similiar as Meeting Room II

*/

export {
  carPoolingCountStops
}