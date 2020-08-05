import React from 'react';

import BitManipulation from './concepts/Bitwise';
import Number from './concepts/Number';

import StringManipulation from './concepts/StringManipulation';
import ArrayAlgorithms from './concepts/ArrayAlgorithms';

import Stack from './concepts/Stack';
import Queue from './concepts/Queue';
import LinkedLists from './concepts/LinkedLists';

import Hash from './concepts/Hash';

import Graph from './concepts/Graph';
import Tree from './concepts/Tree';
import Heap from './concepts/Heap';
import Trie from './concepts/Trie';


import Sorting from './concepts/Sorting';
import Searching from './concepts/Searching';

import Recursion from './concepts/Recursion';
import GreedyAlgorithms from './concepts/GreedyAlgorithms';
import DP from './concepts/DP';

import CodeSandboxTasks from '../eloquent-tasks/CodeSandboxTasks';

import './main.css';

function Main() {
  return (
    <div className="main">
      <div className="wrapper">
        <BitManipulation />
        <Number />

        <StringManipulation />
        <ArrayAlgorithms />

        <LinkedLists />
        <Stack />
        <Queue />

        <Hash />

        <Graph />
        <Tree />
        <Heap />
        <Trie />

        <Sorting />
        <Searching />

        <Recursion />
        <GreedyAlgorithms />
        <DP />

        <CodeSandboxTasks />
      </div>
  </div>
  );
}

export default Main;
