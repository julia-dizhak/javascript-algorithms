// construction function
const Stack1 = function() {
  this.storage = ''; // storage
}

// push(val) - add value to the front, return size stack
Stack1.prototype.push = function(val) {
  this.storage = this.storage.concat('***', val)
}

// pop removes value from front and returns value
Stack1.prototype.pop = function() {
  const lastEliminate = this.storage.lastIndexOf('***');
  // slice off the last characters up until ***
  const str = this.storage.slice(lastEliminate + 3);
  // updating a new stack without last item
  this.storage = this.storage.substr(0, lastEliminate);
  // return the last item
  return str;
}

// size returns size of stack as an integer
Stack1.prototype.size = function() {
  const len = this.storage.length;
  return len;
}

// use ES6 syntax
class Stack {
  constructor() {
    this.storage = '';
  }

  push(val) {
    // push(val) - add value to the front, return size stack
    this.storage = this.storage.concat('***', val);
  }
}

const myWeeklyMenu = new Stack();
myWeeklyMenu.push('carrot');
console.log('myWeeklyMenu', myWeeklyMenu)
// myWeeklyMenu.push('eggs');
// myWeeklyMenu.push('coffee');
// myWeeklyMenu.pop();
// myWeeklyMenu.size()
//console.log('myWeeklyMenu', myWeeklyMenu)

export { Stack }
