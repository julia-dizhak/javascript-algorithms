// implement stack using string as storage
class Stack {
  constructor() {
    this.storage = '';
  }

  isEmpty() {
    if (this.storage.length === 0) return true;
    return false;
  }

  push(item) {
    this.storage = this.storage.concat('***', item);
  }

  pop() {
    let lastEliminate = this.storage.lastIndexOf('***');
    // slice off the last characters up until ***
    const lastStr = this.storage.slice(lastEliminate + 3);
    // updating a new stack without last item
    this.storage = this.storage.substr(0, lastEliminate);
    // return the last item
    return lastStr;
  }

  peek() {
    return this.storage[this.storage.length - 1]
  }
}

export { Stack }
