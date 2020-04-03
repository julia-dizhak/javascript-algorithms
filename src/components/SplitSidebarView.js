import React from 'react';
import { Component } from 'react';
//import { boundMethod } from 'autobind-decorator';
import SplitPane from 'react-split-pane';
import PropTypes from 'prop-types';
import { MOBILE_DEVICE, MINSIZE, EXPANDEDSIZE, THRESHOLDSIZE } from './../config/constants';

import './resizer.css';

const propTypes = {
  children: PropTypes.any
};

export default class SplitSidebarView extends Component {
  constructor (props) {
    super(props);

    const width = window.innerWidth;
    this.state = {
      sideBarSize: this.getSize(width),
      sideBarGrowing: false
    };

    this.handleDrag = this.handleDrag.bind(this);
    this.onDragFinished = this.onDragFinished.bind(this);
    this.onResizerDoubleClick = this.onResizerDoubleClick.bind(this);
  }

  getSize(windowWidth) {
    const minCollapsedWidth = MOBILE_DEVICE; // tablet/mobile devices
    return windowWidth >= minCollapsedWidth ? EXPANDEDSIZE : MINSIZE;
  }

  handleDrag(size) {
    if (size !== this.state.sideBarSize) {
      this.setState({
        sideBarSize: size,
        sideBarGrowing: this.state.sideBarSize < size
      });
    }
  }

  onDragFinished() {
    this.setState({
      sideBarSize: this.state.sideBarGrowing ? EXPANDEDSIZE : MINSIZE
    });
  }

  onResizerDoubleClick(event) {
    this.setState({
      sideBarSize: this.state.sideBarSize === MINSIZE ? EXPANDEDSIZE : MINSIZE
    });
  }

  render() {
    const { sideBarSize } = this.state;
    const { children } = this.props;

    return (
      <SplitPane
        className={sideBarSize < THRESHOLDSIZE ? 'sidebarShortVersion' : null}
        onChange={this.handleDrag}
        onDragFinished={this.onDragFinished}
        onResizerDoubleClick={this.onResizerDoubleClick}
        resizerStyle={{ width: '0' }}
        split="vertical"
        minSize={MINSIZE}
        maxSize={EXPANDEDSIZE}
        size={sideBarSize}>
        { children }
      </SplitPane>
    );
  }
}

SplitSidebarView.propTypes = propTypes;
