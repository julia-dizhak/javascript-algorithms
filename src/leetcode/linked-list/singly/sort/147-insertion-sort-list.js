/*
Leetcode
147 Sort a linked list using insertion sort
medium

A graphical example of insertion sort. The partial sorted list (black) initially 
contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted 
in-place into the sorted list

Algorithm of Insertion Sort:

- Insertion sort iterates, consuming one input element each repetition, and 
growing a sorted output list.

- At each iteration, insertion sort removes one element from the input data, 
finds the location it belongs within the sorted list, and inserts it there.

-It repeats until no input elements remain.

Example 1:
Input: 4->2->1->3
Output: 1->2->3->4

Example 2:
Input: -1->5->3->4->0
Output: -1->0->3->4->5
*/

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
} 

/*
Approach 1 Insertion Sort

Insertion sort is an intuitive sorting algorithm, although it is much less 
efficient than the more advanced algorithms such as quicksort or merge sort.

Often that we perform the sorting algorithm on an Array structure, this problem 
though asks us to perform the insertion sort on a linked list data structure, 
which makes the implementation a bit challenging.

Intuition

Let us first review the idea of insertion sort algorithm, which can be broke down
into the following steps:

First of all, we create an empty list which would be used to hold the results 
of sorting.

We then iterate through each element in the input list. For each element, we 
need to find a proper position in the resulting list to insert the element, so 
that the order of the resulting list is maintained.

As one can see, once the iteration in the above step terminates, we will obtain 
the resulting list where the elements are ordered.


Algorithm
To translate the above intuition into the implementation, we applied two tricks.

The first trick is that we will create a pseudo_head node which serves as a 
pointer pointing to the resulting list.

More precisely, this node facilitates us to always get a hold on the resulting 
list, especially when we need to insert a new element to the head of the resulting 
list. 

In a singly-linked list, each node has only one pointer that points to the next 
node. If we would like to insert a new node (say B) before certain node (say A), 
we need to know the node (say C) that is currently before the node A, i.e. C -> A. 
With the reference in the node C, we could now insert the new node, 
i.e. C -> B -> A.

Given the above insight, in order to insert a new element into a singly-linked 
list, we apply another trick.

The idea is that we use a pair of pointers (namely prev_node -> next_node) which 
serve as place-holders to guard the position where in-between we would insert a 
new element (i.e. prev_node -> new_node -> next_node).

Complexity Analysis

Let N be the number of elements in the input list.

First of all, we run an iteration over the input list.

At each iteration, we insert an element into the resulting list. In the worst case 
where the position to insert is the tail of the list, we have to walk through 
the entire resulting list.

As a result, the total steps that we need to walk in the worst case would be 
= N*(N+1)/ 2 

To sum up, the overall time complexity of the algorithm is O(N^2)

Space Complexity: O(1)
We used some pointers within the algorithm. However, their memory consumption is 
constant regardless of the input.

Note, we did not create new nodes to hold the values of input list, but simply 
reorder the existing nodes.

*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// prev_node -> new_node -> next_node
var insertionSortList = function(head) {
  //debugger
  //new starter of the sorted list
  let pseudoHead = new ListNode(); // helper node
  let curr = head; //the node will be inserted
  let prevNode, nextNode;

  while (curr !== null) {
    // At each iteration, we insert an element into the resulting list.
    prevNode = pseudoHead;
    nextNode = pseudoHead.next;

    console.log(prevNode);
    console.log(nextNode);

    // find the position to insert the current node
    while (nextNode != null) {
      if (curr.val < nextNode.val) break;
      prevNode = nextNode;
      nextNode = nextNode.next;
    }

    let nextIter = curr.next;
    // insert the current node to the new list
    curr.next = nextNode;
    prevNode.next = curr;

    // moving on to the next iteration
    curr = nextIter;
  }

  return pseudoHead.next;
}

// the same approach
var insertionSortList2 = function(head) {
  let before = {
    val: - Number.MAX_VALUE, next: null
  }

  while (head) {
    let prev = before;
    //console.log(prev);
    console.log(head.val);
    console.log(prev.next);

    // find prev
    while (prev.next && prev.next.val < head.val) {
      prev = prev.next;
    }

    var next = head.next;
      head.next = prev.next;
      prev.next = head;
      head = next;
  }

  return before.next;
}

/*
Approach
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList1 = function(head) {
  if (head == null) return head;
  let output = [];

  while (head) {
    let val = head.val;
    output.push(val);
    head = head.next;
  }
  console.log(output);

  let sorted = insertionSort(output);
  console.log(sorted);

  //let list = arrayToList(sorted);
  let list = createList(sorted);
  
  return list;
};

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
}
//console.log('insertionSort', insertionSort([4,2,1,3]));

// Create a list from an array
function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      val: arr[i],
      next: list
    }
  }
  
  return list;
}
//console.log(arrayToList([1,2,3,4]));

function createList(arr) {
  let node, temp;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!node) {
      node = new ListNode(arr[i]);
    } else {
      temp = new ListNode(arr[i]);
      temp.next = node;
      node = temp;
    }
  }
  return node;
}

// tests
// 4->2->1->3
let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);
console.log(head);
const sorted = insertionSortList(head);
console.log(sorted);

export {
  ListNode,
  insertionSortList,
  insertionSortList1,

  arrayToList,
  createList
}
