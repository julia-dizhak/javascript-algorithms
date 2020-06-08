import React from 'react';

import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/" className="logo">Topics</a>
      <nav>
        <ul className="list">
          <li className="item"><header className="title"><a href="#number">Number</a></header></li>
          <li className="item"><header className="title"><a href="#array">Array</a></header></li>
          <li className="item">
            <header className="title">String Manipulation</header>
            <ul className="subList">
              <li><a href="#define-anagrams">Define anagrams</a></li>
              <li><a href="#making-anagrams">Making anagrams</a></li>
            </ul>
          </li>

          <li className="item">
            <header className="title">Sorting</header>
            <ul className="subList">
              <li><a href="#bubble-sort">Bubble sort</a></li>
              <li><a href="#selection-sort">Selection sort</a></li>
              <li><a href="#insertion-sort">Insertion sort</a></li>
              <li><a href="#merge-sort">Merge sort</a></li>
              <li><a href="#quick-sort">Quick sort</a></li>
            </ul>
          </li>
          <li className="item">
            <header className="title">Search</header>
            <ul className="subList">
              <li><a href="#is-find-index">Linear search</a></li>
              <li><a href="#binary-search">Binary search</a></li>

              {/* other tasks */}
              <li><a href="#search-balanced-sum">Balanced Sum</a></li>
              <li><a href="#search-two-sum">Two Sum</a></li>
            </ul>
          </li>

          <li className="item">
            <header className="title">Linked Lists</header>
            <ul className="subList">
              <li><a href="#singly-linked-list">Singly-linked List</a></li>
            </ul>
          </li>
          <li className="item">
            <header className="title">Stack and Queue</header>
            <ul className="subList">
              <li><a href="#stack-use-array">Stack use array</a></li>
              <li><a href="#stack-using-string">Stack use strings</a></li>
              <li><a href="#stack-using-object">Stack implementation using object</a></li>

              <li><a href="#queue-using-object">Queue implementation using object</a></li>
            </ul>
          </li>
          <li className="item">
            <header className="title"><a href="#binary-search-tree">Tree</a></header>
            <ul className="subList">
              <li><a href="#binary-search-tree-operations">Binary Search Tree</a></li>
            </ul>
          </li>

          <li className="item">
            <header className="title">Graph</header>
            <ul className="subList">
              <li><header className="title"><a href="#graph-dfs-flood-fill">Flood fill</a></header></li>
            </ul>
          </li>

          <li className="item"><header className="title"><a href="#recursion">Recursion</a></header></li>
          <li className="item"><header className="title"><a href="#greedy">Greedy Algorithms</a></header></li>
          <li className="item"><header className="title"><a href="#dp">DP</a></header></li>


          <li className="item">
            <header className="title">
              Tasks from Eloquent JavaScript
            </header>
            <ul className="subList">
              <li><a href="#eloquent-looping-triangle">Looping a triangle</a></li>
              <li><a href="#eloquent-fizz-buzz">Fizz buzz</a></li>
              <li><a href="#eloquent-chessboard">Chessboard</a></li>
              <li><a href="#eloquent-is-even">Recursion</a></li>
            </ul>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
