/*

Hash tables are a common data structure for storing key-value pairs.

get is O(n)
*/

// https://www.freecodecamp.org/news/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997/
// https://leetcode.com/problems/design-hashset/discuss/528614/long-javascript-solution-without-hashset-methods
// https://leetcode.com/problems/design-hashset/discuss/137257/javascript-solution%3A-100ms.
// https://leetcode.com/problems/design-hashset/discuss/768659/Python-Easy-Multiplicative-Hash-explained
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
