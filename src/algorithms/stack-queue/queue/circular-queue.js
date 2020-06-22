/*
Leetcode
622 Design a Circular Queue
medium

The circular queue is a linear data structure in which the operations are
performed based on FIFO (First In First Out) principle and the
last position is connected back to the first position to make a circle.
It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the
spaces in front of the queue. In a normal queue, once the queue becomes
full, we cannot insert the next element even if there is a space in
front of the queue. But using the circular queue, we can use the space
to store new values.

Your implementation should support following operations:

MyCircularQueue(k): Constructor, set the size of the queue to be k.

Front: Get the front item from the queue. If the queue is empty, return -1.

Rear: Get the last item from the queue. If the queue is empty, return -1.

enQueue(value): Insert an element into the circular queue.
Return true if the operation is successful.

deQueue(): Delete an element from the circular queue.
Return true if the operation is successful.

isEmpty(): Checks whether the circular queue is empty or not.

isFull(): Checks whether the circular queue is full or not.


Example:

MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
circularQueue.enQueue(1);  // return true
circularQueue.enQueue(2);  // return true
circularQueue.enQueue(3);  // return true
circularQueue.enQueue(4);  // return false, the queue is full
circularQueue.Rear();  // return 3
circularQueue.isFull();  // return true
circularQueue.deQueue();  // return true
circularQueue.enQueue(4);  // return true
circularQueue.Rear();  // return 4

Note:
All values will be in the range of [0, 1000].
The number of operations will be in the range of [1, 1000].
Please do not use the built-in Queue library.
*/


/*
Approach

// todo
In a circular queue, we use an array and two pointers, head and tail.
head indicates the start position of the queue while tail indicates
the ending position of the queue.

The idea is to use a vector to store the values of the queue, and then use two pointers, one to the front and one to the tail, to get the front and back elements. A size variable is used to store current queue size. You could do without this variable and calculate size based on front and back pointers, but it makes things much easier, at barely any cost. Everytime either front or tail reaches end of vector, we wrap it around to the front.
*/

// todo check https://leetcode.com/problems/design-circular-queue/discuss/175023/Java-Solution-with-Explanation
class CircularQueue {
  /**
   * Initialize your data structure here. Set the size of the queue to be k.
   * @param {number} k
   */
  constructor(k) {
    this.data = new Array(k);
    this.head = -1;
    this.tail = -1;
    this.size = k;

  }

  /**
   * Insert an element into the circular queue. Return true if the
   * operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  enqueue(val) {
    if (this.isFull() === true) {
      return false;
    }

    if (this.isEmpty() === true) {
      this.head = 0;
    }

    //debugger

    this.tail = (this.tail + 1) % this.size;
    this.data[this.tail] = val;
    return true;
  }

  /** Delete an element from the circular queue.
   * Return true if the operation is successful.
   * */
  dequeue() {
    if (this.isEmpty() === true) {
      return false;
    }
  }

  front() {

  }

  rear() {

  }

  /** Checks whether the circular queue is empty or not. */
  isEmpty() {
    return this.head === -1;
  }

  /** Checks whether the circular queue is full or not. */
  isFull() {
    return ((this.tail + 1) % this.size) === this.head;
  }


}

// test
const circularQueue = new CircularQueue(3); // set the size to be 3
circularQueue.enqueue(1);
circularQueue.enqueue(2);  // return true
circularQueue.enqueue(3);  // return true
//circularQueue.enqueue(4);  // return false, the queue is full
console.log('circularQueue', circularQueue);

export {
  CircularQueue
}
