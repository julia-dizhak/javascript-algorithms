import React from 'react';
import Sidebar from './components/Sidebar';
import SplitSidebarView from './components/SplitSidebarView';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <SplitSidebarView>
          <Sidebar
            className="sidebar"
          />
          <div
            className="main"
          >
            <header className="App-header">
              Computer Science Algorithms by Javascript
            </header>
            main ...
          </div>
        </SplitSidebarView>
        </div>
    </div>
  );
}

export default App;
