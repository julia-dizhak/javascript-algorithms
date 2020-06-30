/*
Leetcode
232 Implement Queue with 2 stack
easy

Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false

Notes:
You must use only standard operations of a stack -- which means only push to top,
peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively.
You may simulate a stack by using a list or deque (double-ended queue),
as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek
operations will be called on an empty queue).

Hint: If you push elements onto a stack and then pop them all, they appear in
reverse order. If you repeat this process, they're now back in order.
*/

/*
Approach 1 Stack by making enqueue operation costly

Since we main difference between Queue and Stack is the order (first-in first-out vs
last-in first-out) we know that we need to modify peek() and pop() to go in reverse
order.

peek of Stack this.stack[stack.length -1]
peek of Queue this.queue[0]
pop Stack this.stack.pop()
pop Queue this.queue.shift()

We can use our second stack to reverse the order of elements (by popping s1 and
pushing the elements on to s2). In such an implementation, on each peek() and pop()
operation, we would pop everything from s1 onto s2, perform the peek / pop operation,
and then push everything back.

Method 1 moves all the elements twice in enqueue operation, while below is a method
moves the elements once and moves elements only of stack2 empty.

Time complexity
push is O(n)
remove is O(1)
*/

class QueueUse2Stacks {
  constructor() {
    this.stackOldest = [];
    this.stackNewest = [];
  }

  size() {
    return this.stackOldest.length + this.stackNewest.length;
  }

  enqueue(val) {
    // move all elements from s1 to s2
    while (this.stackOldest.length) {
      this.stackNewest.push(this.stackOldest.pop());
    }

    // push val in stack1
    this.stackOldest.push(val);

    // push everything back to s1
    while (this.stackNewest.length) {
      this.stackOldest.push(this.stackNewest.pop());
    }
  }

  dequeue() {
    if (this.stackOldest.length === 0) return 'Queue is empty';
    let x = this.stackOldest[this.stackOldest.length - 1];
    this.stackOldest.pop();
    return x;
  }

  peek() {
    return this.stackOldest[this.stackOldest.length - 1];
  }
}

/*
Approach 2 Stack (push is O(1), remove is O(n))

In this approach, stackNewest  has the newest elements on top and stackOldest has
the oldest elements on top. When we dequeue an element, we want to remove the oldest
element first, and so we dequeue from stackOldest. If stackOldest is empty, then
we want to transfer all elements from stackNewest into this stack in reverse order.
To insert an element, we push onto stackNewest, since it has the newest elements
on top.

Time complexity
push is O(1)
remove is O(n)
*/

class Queue {
  constructor() {
    this.stackNewest = [];
    this.stackOldest = [];
  }

  empty() {
    return !this.stackNewest.length && !this.stackOldest.length;
  }

  size() {
    return this.stackNewest.length + this.stackOldest.length;
  }

  // add or push
  // push onto stackNewest, which always has the newest elements on top
  enqueue(val) {
    this.stackNewest.push(val);
  }

  // move elements from stackNewest to stackOldest.
  // This is usually done so that we can do operations on stackOldest
  shiftStacks() {
    if (!this.stackOldest.length) {
      while (this.stackNewest.length) {
        // reverse order
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }

  peek() {
    // ensure stackOldest has the current elements
    this.shiftStacks();
    // retrieve the oldest item
    return this.stackOldest[this.stackOldest.length - 1];
  }

  // remove
  dequeue() {
    // ensure stackOldest has the current elements
    this.shiftStacks();
    // pop the oldest item
    return this.stackOldest.pop();
  }
}

// tests
// const queue = new Queue();
// queue.enqueue(0);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.dequeue();
// queue.peek();
// queue.dequeue();
// queue.enqueue(3);
// queue.dequeue();
// queue.enqueue(4);
// queue.dequeue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.peek();  // returns 1
// console.log('peek', queue.peek())
// console.log('dequeue', queue.dequeue())
// console.log('empty', queue.empty())
// queue.dequeue();   // returns 1
// queue.empty(); // returns false

//console.log('queue use 2 stacks', queue)

export { Queue, QueueUse2Stacks }
