// construction function
const Stack = function() {
  this.storage = ''; // storage
}

// push(val) - add value to the front, return size stack
Stack.prototype.push = function(val) {
  this.storage = this.storage.concat('***', val)
}

// pop removes value from front and returns value
Stack.prototype.pop = function() {
  const lastEliminate = this.storage.lastIndexOf('***');
  // slice off the last characters up until ***
  const str = this.storage.slice(lastEliminate + 3);
  // updating a new stack without last item
  this.storage = this.storage.substr(0, lastEliminate);
  // return the last item
  return str;
}

// size returns size of stack as an integer
Stack.prototype.size = function() {
  const len = this.storage.length;
  console.log('len', len)
  return len
}

const myWeeklyMenu = new Stack();
myWeeklyMenu.push('carrot');
myWeeklyMenu.push('eggs');
myWeeklyMenu.push('coffee');
myWeeklyMenu.pop();
//myWeeklyMenu.pop();
myWeeklyMenu.size()
console.log('myWeeklyMenu', myWeeklyMenu)

export { myWeeklyMenu }

