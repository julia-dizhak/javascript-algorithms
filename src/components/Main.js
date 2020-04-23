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

import './main.css';

function Main() {
  return (
    <div className="main">
      <div className="wrapper">
        <Number />
        <Recursion />
        <ArrayAlgorithms />
        <Sorting />
        <StringManipulation />
        <GreedyAlgorithms />
        <Searching />
        <Tree />
        <StackQueue />
        <CodeSandboxTasks />
      </div>
  </div>
  );
}

export default Main;
