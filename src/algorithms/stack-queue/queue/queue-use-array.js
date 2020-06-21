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
    return this.queue[0];
  }
}

export {
  Queue
}
