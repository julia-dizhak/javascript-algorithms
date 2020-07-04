import React from 'react';
import Details from '../Details';

import { Stack as StackUseString } from '../../algorithms/stack/stack-use-string';
import { Stack as StackArr } from '../../algorithms/stack/stack-use-array';
import { Stack as StackLinkedList } from '../../algorithms/stack/stack-use-linked-list';
import { StackObj as StackUseObj } from '../../algorithms/stack/stack-using-objects';

import { MinStack, MinStackMinPairs } from '../../leetcode/stack/155-min-stack';
import { MaxStack } from '../../leetcode/stack/716-max-stack';

// problems
// ...

export default function Stack() {
  return (
    <div className="stack" id="stack">
      <h2>Stack</h2>

      <ul>
        {/* <li>
          <Details
            id=""
            question="test"
            code={?.toString()}
          />
        </li> */}
        <li>
          <Details
            id="stack-use-array"
            question="Stack via Array"
            code={StackArr.toString()}
            time='every operation takes constant time'
            space='less wasted space'
          />
        </li>
        <li>
          <Details
            id="stack-use-linked-list"
            question="Stack via Linked List"
            code={StackLinkedList.toString()}
            time='for .push and pop() takes constant time'
            space='need space for pointers'
          />
        </li>
        <li>
          <Details
            id="stack-using-string"
            question="Stack via String"
            code={StackUseString.toString()}
          />
        </li>
        <li>
          <Details
            id="stack-using-object"
            question="Stack via Object"
            code={StackUseObj.toString()}
          />
        </li>
      </ul>

      <ul>
        <li>
          <details
            className="details"
            id="stack-different-tasks"
            aria-expanded="false"
            aria-labelledby="label">
              <summary role="button" aria-controls="content">
                Different problems related to Stacks
              </summary>

              <Details
                id="min-stack"
                question="Min Stack: approach 2 Stacks, approach minimum pairs"
                time="O(1) for all operation"
                space="O(n)"
                code={MinStack.toString()}
                secondCode={MinStackMinPairs.toString()}
              />

              <Details
                id="max-stack"
                question="Max Stack: approach 2 Stacks"
                solution="Design a max stack that supports push, pop, top, peekMax and popMax."
                complexity={
                  `
                  Can we design operations in O(1) like the min stack problem? No
                  Because if it were, you could use this data structure to sort an array of numbers in O(n) time.
                  So, at the very least, either push(x) or popMax() must be O(log n)
                  `
                }
                time="O(N) for the popMax operation, and O(1) for the other operations"
                space="O(N), the maximum size of the stack."
                code={MaxStack.toString()}
                secondCode={MaxStack.toString()}
              />
          </details>
        </li>
      </ul>
  </div>
  );
}
