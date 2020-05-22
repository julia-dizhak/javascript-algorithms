import { Stack } from "./stack-using-string";

/**
 * implement a min Stack
 * keep track of the minimum
 * 
*/
class MinStack {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = {};
    this.count = 0;
    this.min = new Stack();


  }
}
