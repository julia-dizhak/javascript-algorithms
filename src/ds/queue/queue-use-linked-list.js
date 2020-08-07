class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
Implementation with one pointer

time complexity:
enqueue - O(n)
dequeue - O(1)
*/
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  getHead() {
    return this.head.val;
  }

  getLength() {
    return this.length;
  }

  // Insert: add to the end of linked list
  // To add an item in the queue, we will check if the list is empty
  // then use the new node as the first element else add the new node
  // to the end of the existing nodes.
  enqueue(item) {
    let newNode = new ListNode(item);
    if (!this.head) {
      this.head = newNode
    } else {
      let traverseNode = this.head;
      while (traverseNode.next) {
        traverseNode = traverseNode.next
      }
      traverseNode.next = newNode;
    }
    this.length++;
  }

  // remove from beginning
  dequeue() {
    if (!this.head) return 'Queue is empty!';
    // saves the link to the head which we need to remove
    const current = this.head;

    // moves the head link to the second Node in the Queue
    // this.head is the satisfied customer who has already bought products
    // this.head.next is the next customer who becomes the head of the queue after
    // satisfied customer leaving
    this.head = this.head.next;
    this.length--;
    // returns the removed Nodes value
    return current.val;
  }

  peek() {
    if (!this.head) return 'Queue is empty!';
    return this.head.val;
  }

  // show all values of all nodes in Queue
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }

  }
}

/*
Implementation with 2 pointers

time complexity:
enqueue - O(1) because we have tail pointer
dequeue - O(1)
*/

class QueueUse2Pointers {
  constructor() {
    this.head = null; // link to the first node
    this.tail = null; // link to the last node
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  getHead() {
    return this.head.val;
  }

  getLength() {
    return this.length;
  }

  enqueue(val) {
    let newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode; // the created Node is head
      // also the created Node is a tail in Queue because it is single
      this.tail = newNode;
    } else {
      // inserts the created node after the tail
      this.tail.next = newNode;
      // now created Node is a tail
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) return 'Queue is empty!';
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    return current.val;
  }

  peek() {
    if (!this.head) return 'Queue is empty!';
    return this.head.val;
  }
}

// tests
// const persons = new Queue();
// persons.enqueue('first');
// persons.enqueue('second');
// persons.enqueue('third');
// persons.dequeue();
// persons.dequeue();
// persons.dequeue();
// persons.print();
//console.log('Queue', persons)
//const personsJson = JSON.parse(JSON.stringify(persons));
//console.log('personsJson', personsJson);

export {
  Queue,
  QueueUse2Pointers
}
