import React from 'react';

import BitManipulation from './concepts/Bitwise';
import Number from './concepts/Number';
import StringManipulation from './concepts/StringManipulation';
import ArrayAlgorithms from './concepts/ArrayAlgorithms';
import Hash from './concepts/Hash';

import Sorting from './concepts/Sorting';
import Searching from './concepts/Searching';

import Recursion from './concepts/Recursion';

import StackQueue from './concepts/StackQueue';
import LinkedLists from './concepts/LinkedLists';
import Tree from './concepts/Tree';
import Graph from './concepts/Graph';

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
        <Hash />

        <Sorting />
        <Searching />

        <LinkedLists />
        <StackQueue />
        <Tree />
        <Graph />

        <Recursion />
        <GreedyAlgorithms />
        <DP />

        <CodeSandboxTasks />
      </div>
  </div>
  );
}

export default Main;
