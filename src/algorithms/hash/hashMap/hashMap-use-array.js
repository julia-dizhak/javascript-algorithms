/*

Hash tables are a common data structure for storing key-value pairs.

get is O(n)
*/

// https://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html
class HashTable {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(key, value) {
    this.keys.push(key);
    this.keys.push(value);
  }

  get(lookupKey) {
    for (let i = 0; i < this.keys.length; i++) {
      if (this.keys[i] === lookupKey) {
        return this.values[i];
      }
    }
  }
}

export {
  HashTable
}
