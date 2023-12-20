// Main.js
import React, { Component } from 'react';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="sub-main">
          <SubContents />
          <SubContents />
          <SubContents />
        </div>
        <Advertisement />
      </div>
    );
  }
}

export default Main;
