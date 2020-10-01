// construction function
function Queue(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {}
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.count = function() {
  return this.tail - this.head;
};

Queue.prototype.enqueue = function(val) {
  if (this.count() < this.capacity) {
    this.storage[this.tail++] = val;
    return this.count();
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

Queue.prototype.dequeue = function() {
  var element = this.storage[this.head];
  delete this.storage[this.head];
  if (this.head < this.tail) this.head++;
  return element;
}


//const myQueue = new Queue(3);
// console.log('myQueue', myQueue )

// todo
// head - remove
// tail - add thing here
// isEmpty() {
//   return head == null
// }

// peek

// add to the tail
// tail is not null

// remove

// // queue
// let queue = [];
// // put value on end of queue
// queue.push(2);
// queue.push(5);
// // take first value from queue
// const j= queue.unshift();
// console.log(j)

export { Queue }
