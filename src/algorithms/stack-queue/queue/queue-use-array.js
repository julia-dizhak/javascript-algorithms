/*

time complexity
space complexity
*/
class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  // insert - add to the end
  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('queue is empty');
    }
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('queue is empty');
    }
    return this.queue[0];
  }
}

// test
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
// console.log('queue', queue)

export {
  Queue
}
