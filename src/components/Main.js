import React from 'react';

import Sorting from './concepts/Sorting';
import StringManipulation from './concepts/StringManipulation';
import CodeSandboxTasks from '../eloquent-tasks/CodeSandboxTasks';
import GreedyAlgorithms from './concepts/GreedyAlgorithms';
import Number from './concepts/Number';
import Recursion from './concepts/Recursion';
import ArrayAlgorithms from './concepts/ArrayAlgorithms';
import Searching from './concepts/Searching';
import Tree from './concepts/Tree';
import StackQueue from './concepts/StackQueue';
import Graph from './concepts/Graph';

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
        <Tree />
        <Graph />
        <GreedyAlgorithms />
        <CodeSandboxTasks />
      </div>
  </div>
  );
}

export default Main;
