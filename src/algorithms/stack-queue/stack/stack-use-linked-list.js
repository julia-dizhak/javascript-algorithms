class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

/*
Approach implementation of Stack via Linked List
time: every operation takes constant time
space: depends on machine, extra space to deal with links
*/
class Stack {
  constructor() {
    this.stack = null;
  }

  get length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.length === 0
  }

  // insert a new node at the beginning of Linked list
  push(item) {
    let head = this.stack;
    let newNode = new ListNode(item, null);

    if (!head) {
      this.stack = newNode;
    } else {
      newNode.next = head;
      this.stack = newNode;
    }
  }

  // remove first node from the beginning of Linked list
  // that's most recently added item
  pop() {
    let head = this.stack;
    if (!head) return 'Stack is empty';
    this.stack = head.next;
    return head.val;
  }

  peek() {
    if(!this.stack) return 'Stack is empty!';
    return this.stack.val;
  }
}

export {
  Stack
}
