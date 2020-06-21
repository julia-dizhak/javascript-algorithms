class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
Approach

time complexity
*/
class Queue {
  constructor() {
    this.head = null;
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
        traverseNode = traverseNode.nex
      }
      traverseNode.next = newNode;
    }
  }

  // remove from beginning
  dequeue() {
    if (!this.head) return 'Queue is empty!';
    else {
      this.head = this.head.next
    }
    return this.head.val;
  }

  peek() {
    if (!this.head) return 'Queue is empty!';
    return this.head.val;
  }
}

export { Queue }
