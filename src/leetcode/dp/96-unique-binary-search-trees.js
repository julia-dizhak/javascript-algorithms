/*
Leetcode
96 Unique Binary Search Trees
medium

Catalan numbers
Given n, how many structurally unique BST's (binary search trees) that store
values 1 ... n?

Example:
Input: 3
Output: 5

Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/*
Approach DP

Intuition
Given a sequence 1 ... n, to construct a Binary Search Tree (BST) out of the
sequence, we could enumerate each number i in the sequence, and use the number
as the root, naturally,
the subsequence 1 ... (i-1) on its left side would lay on the left branch of the root,
and similarly the right subsequence (i+1)...n lay on the right branch of the root.

We then can construct the subtree from the subsequence recursively.
Through the above approach, we could ensure that the BST that we construct are
all unique, since they have unique roots.

The problem is to calculate the number of unique BST. To do so, we need to define
two functions:

G(n): the number of unique BST for a sequence of length n.
F(i, n), 1 <= i <= n: the number of unique BST, where the number i is the root of BST,
and the sequence ranges from 1 to n.

First of all, given the above definitions, we can see that the total number of
unique BST G(n), is the sum of BST F(i) using each number i as a root.
i.e. G(n) = F(1, n) + F(2, n) + ... + F(n, n).

The bottom cases, there is only one combination to construct a BST out of a
sequence of length 1 (only a root) or 0 (empty tree).
i.e. G(0)=1, G(1)=1.

Given a sequence 1…n, we pick a number i out of the sequence as the root, then
the number of unique BST with the specified root F(i), is the cartesian product
of the number of BST for its left and right subtrees.

For example, F(3, 7):
the number of unique BST tree with number 3 as its root. To construct an unique
BST out of the entire sequence [1, 2, 3, 4, 5, 6, 7] with 3 as the root,
which is to say, we need to construct an unique BST out of its left subsequence
[1, 2] and another BST out of the right subsequence [4, 5, 6, 7], and then combine
them together (i.e. cartesian product). The tricky part is that we could consider
the number of unique BST out of sequence [1,2] as G(2), and the number of of
unique BST out of sequence [4, 5, 6, 7] as G(4).
Therefore, F(3,7) = G(2) * G(4).
i.e.
F(i, n) = G(i-1) * G(n-i),	1 <= i <= n (cartesian product)

Combining the above two formulas, we obtain the recursive formula for G(n). i.e.
G(n) = G(0) * G(n-1) + G(1) * G(n-2) + … + G(n-1) * G(0)

Example
    n = 0;     null
    count[0] = 1


    n = 1;      1
    count[1] = 1


    n = 2;    1__       			 __2
    		      \					/
    		     count[1]	   	count[1]
    count[2] = 1 + 1 = 2


    n = 3;    1__				      __2__	                   __3
    		      \		            /       \			      /
    		  count[2]		  count[1]    count[1]		count[2]

    count[3] = 2 + 1 + 2  = 5



    n = 4;    1__  					__2__					   ___3___
    		      \				 /        \					  /		  \
    		  count[3]		 count[1]    count[2]		  count[2]   count[1]

                 __4
               /
           count[3]

    count[4] = 5 + 2 + 2 + 5 = 14


And  so on ...

Complexity analysis
Time is O(n^2), could be only 1/half in n^2
Space O(n) (n+1)
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let T = new Array(n+1).fill(0);
  // bottom cases
  T[0] = T[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // just treat each number as root, and then left part * right part is the answer.
      // combine together - cartesian product
      T[i] += T[j - 1] * T[i - j];
    }
  }
  return T[n];
}
//console.log('numTrees', numTrees(3));

export {
  numTrees
}

