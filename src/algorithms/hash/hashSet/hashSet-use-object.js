/*
Leetcode
705 Design a HashSet without using any built-in hash table libraries.
easy

To be specific, your design should include these functions:
add(value): Insert a value into the HashSet.

contains(value): Return whether the value exists in the HashSet or not.

remove(value): Remove a value in the HashSet. If the value does not exist in
the HashSet, do nothing.

Example:
MyHashSet hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);
hashSet.contains(2);    // returns true
hashSet.remove(2);
hashSet.contains(2);    // returns false (already removed)

Note:
All values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashSet library.
*/

/*
Approach use obj

this solution under requirement, because {} is using any built-in hash in JS
*/
class HashSet {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    //debugger
    // count only unique values
    if (!this.contains(key)) this.length++;
    key = key.toString();
    this.data[key] = key;
  }

  /**
   * Returns true if this set contains the specified element
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    key = key.toString()
    // Converts Object to boolean. If it was false (e.g. 0, null, undefined, etc.),
    // it will be false, otherwise, true.
    return (!!this.data[key] && this.data.hasOwnProperty(key));
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    if (!this.contains(key)) {
      return
    } else {
      delete this.data[key.toString()];
      this.length--;
    }
  }
  // remove with return
  // remove(value) {
  //   value = value.toString();
  //   if (!this.data.contains(value)) {
  //     return false
  //   } else {
  //     delete this.data[value];
  //     this.length--;
  //     return true;
  //   }
  // }

  size() {
    return this.length
  }

  isEmpty() {
    return this.length === 0
  }

  toArray() {

  }
}

/*
Approach use obj, simple API
*/
class HashSetVariant1 {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  add(key) {
    if (!this.data[key]) {
      this.data[key] = true;
      this.length++;
    }
  }

  remove(key) {
    if (this.data[key]) {
      delete this.data[key];
      this.length--;
    }
  }

  contains(key) {
    if (!this.data[key]) {
      return false;
    }
    else return true;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}


// tests
const hash = new HashSet();
hash.add(1);
hash.add(2);
hash.contains(1);
hash.remove(2);
hash.remove(3);
hash.contains(3);
hash.add(1);
hash.add(2);
console.log('hash', hash)



// https://leetcode.com/problems/design-hashset/discuss/768659/Python-Easy-Multiplicative-Hash-explained
// return ((key*1031237) & (1<<20) - 1)>>5
// key is val
// let mySet = new Set()
// mySet.add(10000)

// hashing with load factor
// array https://leetcode.com/problems/design-hashset/discuss/137257/javascript-solution%3A-100ms.
// https://leetcode.com/problems/design-hashset/discuss/304242/Javascript-Solution-Easy-To-Understand

// https://javascript.info/class-inheritance
// interface js
// strategy pattern
/*

class Duck {
  constructor() {
   this.flyBehaviour = new Date()
}
}

k = new Duck()

class CanFly {
fly = () => console.log('fly...')
}

class FlyingDuck extends Duck {
   constructor() {
    super();
    this.newFly = new CanFly();
}
}
pp = new CanFly()
pp = new FlyingDuck()
pp.flyBehaviour
pp.newFly.fly()
*/

export {
  HashSet,
  HashSetVariant1,
}
