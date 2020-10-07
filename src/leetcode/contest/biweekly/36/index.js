/*
Biweekly 36 03.10

3904 / 8332
How many problem resolved?
1 problem

*/

function test() {
  //console.log('biweekly 36')
}

//console.log('test', test());

/*
1 problem

ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car

big, medium, or small, which are represented by 1, 2, and 3 respectively
*/

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
}    

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (carType === 1) {
    if (this.big >= 1) {
      this.big--;
      return true
    }
    return false;
  }
  if (carType === 2) {
    if (this.medium >= 1) {
      this.medium--;
      return true
    }
    return false;
  }
  if (carType === 3) {
    if (this.small >= 1) {
      this.small--;
      return true
    }
    return false;
  }
};

let parkingSystem = new ParkingSystem(1, 1, 0);
//parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// console.log('parkingSystem', parkingSystem);
// console.log(parkingSystem.addCar(1));
// console.log(parkingSystem.addCar(2));
// console.log(parkingSystem.addCar(3));
// console.log(parkingSystem.addCar(1));
// console.log(parkingSystem.addCar(1));
// parkingSystem.addCar(2);
// parkingSystem.addCar(3);
// parkingSystem.addCar(1); 

/*
[keyName[i], keyTime[i]]

The system emits an alert if any worker uses the key-card three or more times 
in a one-hour period.



Return a list of unique worker names who received an alert for frequent keycard use
 Sort the names in ascending order alphabetically.

 Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "23:51" - "00:10" is not considered to be within a one-hour period.

Group the times by the name of the card user, then sort each group 
*/

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames1 = function(keyName, keyTime) {
  let workers = [];
  let count = 1;

  // let hash = {};
  // for (let i = 0; i < keyName.length; i++) {
  //   //debugger
  //   // let start = keyTime[i].split(':');
  //   // let diffHours = start[0];
  //   // let diffMinutes = start[1];
  //   // console.log('diffHours', diffHours);
  //   // console.log('diffMinutes', diffMinutes);
  //   if (hash[keyName[i]] === undefined) {
  //     hash[keyName[i]] = [keyTime[i]]
  //   } else {
  //     let prevTime = hash[keyName[i]];
  //     let res = prevTime.push[keyTime[i]]
  //     // let currTime = keyTime[i];
  //     console.log('prevTime', prevTime);
  //     // console.log('curr', keyTime[i])
  //     hash[keyName[i]] = res;
  //   } 
  // }

  //console.log('hash', hash)


  // for (let i = 0; i < keyName.length - 1; i++) {
  //   let start = keyTime[i].split(':');
  //   //console.log(keyTime[i+1])
  //   let end = keyTime[i+1].split(':');
  //   let diffHours = Math.abs(start[0] - end[0]);
  //   let diffMinutes = Math.abs(start[1] - end[1]);
  //   console.log('start', start);
  //   console.log('end', end);
  //   console.log('diffHours', diffHours);
  //   console.log('diffMinutes', diffMinutes);

  //   if (keyName[i] === keyName[i+1]) {
  //     //count = 1
  //     if (diffHours <= 1) count++; 
  //   } else {
  //     count = 1;
  //   }
  //   //console.log('count', count)
  //   if (count >= 3) workers.push(keyName[i])
  // }

  var x = {}
  keyName.map((name, index) => {
    console.log(name);
    console.log(index)
    x[name] = x[name] || []
    x[name].push(keyTime[index])
    console.log(x)
  })
  console.log('x', x);
  for (const key in x) {
    console.log('key', key);
    let arr = x[key].sort();
    console.log('arr', arr);
    for (let i = 0; i < arr.length - 1; i++) {
      let start = arr[i].split(':');
      console.log(start[0])
      let end = arr[i+1].split(':');
      console.log(end[0])
      let diffHours = Math.abs(start[0] - end[0]);
      let diffMinutes = Math.abs(start[1] - end[1]);
      console.log('diffHours', diffHours);
      console.log('diffMinutes', diffMinutes);
    }
  
    


  }

  workers = [... new Set(workers)];

  return workers.sort();
};

var alertNames = function(keyName, keyTime) {
  let res = [];
  let hash = {};
  let minutes = time => Number(time.split(':')[0] * 60) + Number(time.split(':')[1]);

  for (let i = 0; i < keyName.length; ++i) {
    //const name = keyName[i],
    //const time = keyTime[i];
    // if (!m.has(name))
    //     m.set(name, []);
    // m.set(name, m.get(name).concat(minutes(time)));
}

  keyName.map((name, index) => {
    //console.log(name);
    //console.log(index)
    hash[name] = hash[name] || []
    hash[name].push(keyTime[index])
  });

  for (const key in hash) {
    //console.log('key', key);
    let arr = hash[key].sort();
    //console.log('arr', arr);
  }

  //console.log(hash)
}

const keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"];
const keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
//console.log('alertNames', alertNames(keyName, keyTime))
// example
let keyName2 = ["alice","alice","alice","bob","bob","bob","bob"]; 
let keyTime2 = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"];
//console.log('alertNames', alertNames(keyName2, keyTime2))

let keyName3 = ["john","john","john"];
let  keyTime3 = ["23:58","23:59","00:01"];
//console.log('alertNames', alertNames(keyName3, keyTime3));

let keyName4 = ["leslie","leslie","leslie","clare","clare","clare","clare"];
let keyTime4 = ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]
//console.log('alertNames', alertNames(keyName4, keyTime4));

let keyName5 = ["a","a","a","a","a","b","b","b","b","b","b"];
let keyTime5 = ["23:20","11:09","23:30","23:02","15:28","22:57","23:40","03:43","21:55","20:38","00:19"]

//console.log('alertNames', alertNames(keyName5, keyTime5));

export {
  test,
  alertNames
}