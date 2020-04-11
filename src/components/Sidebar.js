import React from 'react';

import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/" className="logo">Algo</a>
      <nav>
        <ul className="list">
          <li className="item">
            <header className="title">Arrays</header>
            <ul className="subList">
              <li><a href="#is-sorted">Merge two sorted arrays</a></li>
              {/* <li><a href="#is-find-index">Find an index in array</a></li> */}
            </ul>
          </li>

          <li className="item">
            <header className="title">Sorting</header>
            <ul className="subList">
              <li><a href="#bubble-sort">Bubble sort</a></li>
              <li><a href="#quick-sort">Quick sort</a></li>
              {/* other tasks */}
              <li><a href="#find-median">Find a median</a></li>
            </ul>
          </li>

          <li className="item">
            <header className="title">String Manipulation</header>
            <ul className="subList">
              <li><a href="#define-anagrams">Define anagrams</a></li>
              <li><a href="#making-anagrams">Making anagrams</a></li>
            </ul>
          </li>

          <li className="item">
            <header className="title">Greedy Algorithms</header>
            <ul className="subList">
              <li><a href="#greedy-min-absolute-difference">Minimum absolute difference</a></li>
              <li><a href="#greedy-luck-balance">Luck balance</a></li>
            </ul>
          </li>

          <li className="item">
            <header className="title">
              Tasks from Eloquent JavaScript
            </header>
            <ul className="subList">
              <li><a href="#eloquent-looping-triangle">Looping a triangle</a></li>
              <li><a href="#eloquent-fizz-buzz">Fizz buzz</a></li>
              <li><a href="#eloquent-chessboard">Chessboard</a></li>
            </ul>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
