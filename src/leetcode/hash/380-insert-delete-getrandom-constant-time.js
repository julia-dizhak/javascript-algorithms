/*
Leetcode
380 Insert Delete GetRandom O(1)
medium

Design a data structure that supports all following operations in average O(1) time.
insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements.
Each element must have the same probability of being returned.

Example:
// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();

follow-up 381 hard
explanation https://leetcode.com/problems/insert-delete-getrandom-o1/discuss/85401/Java-solution-using-a-HashMap-and-an-ArrayList-along-with-a-follow-up.-(131-ms)

todo
solution 2 hashes
https://leetcode.com/problems/insert-delete-getrandom-o1/discuss/85434/Java-solution-with-two-HashMaps%3A-easy-to-understand
https://leetcode.com/problems/insert-delete-getrandom-o1/discuss/589197/javascript-es6-O(1)-using-class-and-maps
*/

/*
Approach array + map

Thoughts
What is the type of the items to be inserted? Is it always a number?

Algorithm
Here we have to implement 3 functions i.e.
insert(), remove() and getRandom() in O(1) complexity.
First thing that comes to our mind is to use HashSet/ HashMap
as they provide O(1) insert and O(1) remove.

The Map object holds key-value pairs and remembers the original insertion order
of the keys. Any value (both objects and primitive values)
may be used as either a key or a value.

The problem is with the getRandom() method as how to implement such a method?
to pick a random element, we need to either have a
total number, plus a way to access by that number.
Get random item from JS array
var item = items[Math.floor(Math.random() * items.length)];


So the second thing that comes to our mind is to use ArrayList.
ArrayList can provide O(1) insert and O(1) getRandom() but cannot provide O(1) remove,
removing an element at a random index takes O(n) complexity.
One important thing to know is that complexity to remove the last element in the ArrayList is O(1).
In order to tackle the remove method we can create a map which will
consist of list values with there index in the list and will try to delete from
the end of the list as it is O(1). So in case a call comes for delete() :

1 We will find the index of the element to be deleted in O(1) complexity using map.
2 We will put the value from the last index to the index found in step 1 in the ArrayList in O(1).
3 We will remove the last element from the ArrayList in O(1), and it's entry from the map in O(1).
4 We will finally update the index in the map for the value which has come to the index found in step 1 in O(1).
So we will be able to perform delete() in O(1) as well.

insert(val)
Keep a hash map of items to their index in the array

remove(val)
When an item is to be removed, get index from the hash map
and move last element in the array to overwrite this index
(to prevent the array from growing sparse and breaking getRandom).
Then remove the value-index mapping from the hash map.
Now we have O(1) delete.

*/
class RandomizedSet {
  // Init an empty set.
  constructor(val) {
    // a basic array with inserts
    this.arr = [];
    // A Map with the inserts as keys and the position in the basic array as values.
    this.map = new Map();
  }

  // Inserts 1 to the set. Returns true as 1 was inserted successfully.
  insert(val) {
    let { arr, map } = this;

    // if val is not a number
    if (map.has(val)) return false;

    arr.push(val);
    // key is value
    // value is index in array
    map.set(val, arr.length - 1);

    // todo provide a test
    // TODO account for wrong type of val or array too large?
    return true;
  }

  // Removes an item val from the set if present.
  remove(val) {
    let { arr, map } = this;

    if (!map.has(val)) return false;

    const index = map.get(val);
    // todo check why it's mistake
    //map.delete(val);

    const last = arr[arr.length - 1]; // last element in arr

    // important! overwrite a value, not a swap
    // copy last element to a given index
    arr[index] = last;
    //debugger
    map.set(last, index)

    // remove last element
    arr.pop();
    // remove from map
    map.delete(val);

    return true;
  }

  // Random is classic random on the array
  getRandom() {
    const { arr } = this;
    //debugger
    const random = Math.floor(arr.length * Math.random()); // 0 or 1 index
    return arr[random]
  }
}

const randomSet = new RandomizedSet(10);
randomSet.insert(2);
randomSet.insert(10);
randomSet.insert(4);
randomSet.remove(2);
randomSet.getRandom();
//console.log('randomSet', randomSet)

export { RandomizedSet }
