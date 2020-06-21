class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class QueueUseLinkedList {
  constructor() {
    this.head = null
  }

  enqueue(item) {
    let newNode = new ListNode(item)

  }

  dequeue() {

  }
}

export { QueueUseLinkedList }
