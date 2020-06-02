import React from 'react';

import Number from './concepts/Number';
import StringManipulation from './concepts/StringManipulation';
import ArrayAlgorithms from './concepts/ArrayAlgorithms';
import Sorting from './concepts/Sorting';
import GreedyAlgorithms from './concepts/GreedyAlgorithms';
import Recursion from './concepts/Recursion';
import Searching from './concepts/Searching';
import StackQueue from './concepts/StackQueue';
import LinkedLists from './concepts/LinkedLists';
import Tree from './concepts/Tree';
import Graph from './concepts/Graph';

import CodeSandboxTasks from '../eloquent-tasks/CodeSandboxTasks';

import './main.css';

function Main() {
  return (
    <div className="main">
      <div className="wrapper">
        <Number />
        <ArrayAlgorithms />
        <StringManipulation />
        <Recursion />
        <Sorting />
        <Searching />
        <StackQueue />
        <LinkedLists />
        <Tree />
        <Graph />
        <GreedyAlgorithms />
        <CodeSandboxTasks />
      </div>
  </div>
  );
}

export default Main;
