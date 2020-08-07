class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

/*
Approach implementation of Stack via Linked List

push(item) - As in the stack new item are added on the top,
If the head is empty then the new node will be the first element,
else we will make all the new node of the linked list to be
the first node by assigning all the old nodes to the new node.

pop() - To remove an item from the stack we can just make the head to point
the very next element.

time: every operation takes constant time
space: depends on machine, extra space to deal with links
*/
class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0
  }

  // push data into the stack
  // insert a new node at the beginning of Linked list
  push(item) {
    // create a new node
    let newNode = new ListNode(item, null);

    // 2 cases if list is empty
    // or head is not empty
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // remove first node from the beginning of Linked list
  // that's most recently added item
  pop() {
    if (!this.head) return null;
    this.head = this.head.next;
    this.length--;
    return this.head.val;
  }

  peek() {
    if (!this.head) return null;
    return this.head.val;
  }

  // todo
  // Convert the stack to an array
  // toArray = function(){
  //   let arr = [];
  //   let current = head;
  //   while(current){
  //     arr.push(current.element);
  //     current = current.next;
  //   }

  //   return arr;
  // }

  clear() {
    this.head = null;
    this.length = 0;
  }
}

const stack = new Stack();
stack.push(1)
stack.push(2);
stack.pop();
//console.log('stack via Linked List', stack)

export {
  Stack,
  // StackUsingLinkedList
}
