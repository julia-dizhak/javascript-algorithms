import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { store } from './practice-react/life-game/store/store';

import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SplitSidebarView from './components/SplitSidebarView';

// test react
// import { default as Example }  from './practice-react/app';
// import Game from './practice-react/life-game/Game';
import DrawCanvas from './challenges/draw/';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function openTarget() {
  let hash = location.hash.substring(1);  // eslint-disable-line

  if (hash) {
    var detail = document.getElementById(hash);
  }

  if (detail && detail.tagName.toLowerCase() === 'details') {
    detail.open === true ?  detail.open = false : detail.open = true
  }
}

class App extends Component {
  state = {

  }

  componentDidMount() {
    window.addEventListener('hashchange', openTarget);
  }


  render() {
  return (
      <div className="App">
        {/* <Provider store={store}>
          <Game />
        </Provider> */}
        
        {/* <Example /> */}

        <SplitSidebarView>
          <Sidebar className="sidebar" />
          <div className="rightPart">
            <header className="App-header">
              Problem solving in JavaScript
            </header>
            <Main />
          </div>
        </SplitSidebarView>
      </div>
    );
  }
}

export default App;
