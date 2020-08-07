/*
The dynamic connectivity problem

The Union find algorithm solves a huge problem in computing.
In a system with many elements, where elements are connected via a path through other elements, how do we efficiently determine if two elements are connected?
*/

/*
Approach brute force (Eager approach)

The brute force algorithm works by assigning
two connected elements to the same id.
You can check if two elements are connected by checking
that they have a matching id.

Describe an API:
init
connected (find): is there a path connecting the 2 objects?
union (merge)

The problem with this implementation is that whenever you create
a new connection between two elements, you have to iterate
through the entire id array in search of elements
that have been previously connected to the element
whose id you are changing.

For example, if we connect 2 and 3, we also have to connect 3 to every
element previously connected to 2. The only way to accomplish
this is to iterate through the whole array.
Iterating through the entire array will have 0(n) time complexity
which is inefficient for large systems.

time complexity
init - O(n)
find - O(1)
union - O(n)

QuickFind algorithm is too expensive
Takes n2 array access to process sequence of N union commands of N object.

What is the maximum number of id[] array entries that can change
(from one value to a different value)
during one call to union when using the quick-find
data structure on N elements?

Correct
In the worst case, all of the entries except id[q] are changed
from id[p] to id[q].
*/
class QuickFind {
  // construct an array with N integer elements
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id[i] = i

    }
  }

  // connections between elements are tracked in the ID array.
  // To check if two elements are connected, we check for an ID match
  connected(p,q) {
    return this.id[p] === this.id[q];
  }

  // To create a new connection between two elements P and Q,
  // we change the id of element P to the id of element Q.
  // We also change all the elements that were previously
  // connected to P to the new id.
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

const quickFind = new QuickFind(10);
let connectedBefore = quickFind.connected(1,2);
quickFind.union(1,2);
quickFind.union(1,3);
quickFind.union(0,3);

//console.log('quickFind', quickFind);

export { QuickFind }
