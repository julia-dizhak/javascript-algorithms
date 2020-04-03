import React from 'react';

import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/" className="logo">Algo</a>
      <nav>
        <ul className="list">
          <li>
            <header className="title">Arrays</header>
            <ul className="subList">
              <li><a href="#is-sorted">Merge two sorted arrays</a></li>
              {/* <li><a href="#is-find-index">Find an index in array</a></li> */}
            </ul>
          </li>

          <li>
            <header className="title">Sorting</header>
            <ul className="subList">
              <li><a href="#bubble-sort">Bubble sort</a></li>
              {/* <li><a href="sorting-quick-sort">Quick sort</a></li> */}
            </ul>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
