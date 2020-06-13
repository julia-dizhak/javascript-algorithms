/*
The dynamic connectivity problem

see Quick Find as well (not efficient approach)

Luckily, there’s an elegant solution to improve the efficiency of the algorithm.
Rather than iterate through the whole array to create a new connection,
we will maintain a tree of connections with a single root element:

Instead of assigning connected elements the same id,
we will assign them a parent element.
To find the root of an element, we can follow parents up the tree
until we hit the element whose parent is itself. That’s the root.

This algorithm creates a while loop. In each iteration of the loop,
the current element is reassigned to its parent element.
When the current element is equal to its parent,
that means we hit the root element, so we return that element.
*/


class QuickUnion {
  // N is the initial number of elements in the system,
  // before any connections are made.
  constructor(N) {
    this.id = [];
    this.size = [];
    // Returns the number of components, which initializes at N
    this.treeCount = N;

    for (let i = 0; i < N; i++) {
      this.id[i] = i;
      // number of objects in subtree with root i
      this.size[i] = 1;
    }
  }

  // Returns the component id for the containing site
  findRoot(currentElem) {
    while (currentElem !== this.id[currentElem]) {
      currentElem = this.id[currentElem]
    }
    return currentElem;
  }

  // Returns true if two elements are part of the same component
  connected(elemA, elemB) {
    return this.findRoot(elemA) === this.findRoot[elemB];
  }

  // Connects the components of two elements
  union(p, q) {
    let pid = this.id[p];
    let qid = this.id[q];

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) {
        this.id[i] = qid;
      }
    }

  }
}

const quickUnion = new QuickUnion(10);
let connectedBefore = quickUnion.connected(1,2);
quickUnion.union(1,2);
// quickFind.union(1,3);
// quickFind.union(0,3);
// let connectedAfter = quickFind.connected(1,2);

console.log('====================================');
console.log('quickFind', quickUnion);
console.log('connectedBefore', connectedBefore);
console.log('====================================');

export { QuickUnion }
