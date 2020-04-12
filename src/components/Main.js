import React from 'react';

import Sorting from './concepts/Sorting';
import StringManipulation from './concepts/StringManipulation';
import CodeSandboxTasks from '../eloquent-tasks/CodeSandboxTasks';
import GreedyAlgorithms from './concepts/GreedyAlgoritms';
import Number from './concepts/Number';
import ArrayAlgorithms from './concepts/ArrayAlgorithms';

import './main.css';

function Main() {
  return (
    <div className="main">
      <div className="wrapper">
        <Number />
        <ArrayAlgorithms />
        <Sorting />
        <StringManipulation />
        <GreedyAlgorithms />
        <CodeSandboxTasks />
      </div>
  </div>
  );
}

export default Main;
