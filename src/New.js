import React, { Component } from 'react';
import logo from './logo.svg';
import './New.css';

class New extends Component {
  render() {
    return (
      <div className="NEW">
        <header className="NEW-header">
          <img src={logo} className="NEW-logo" alt="logo" />
          <h1 className="NEW-title">Welcome to React</h1>
        </header>
        <p className="NEW-intro">
          To get started, edit <code>src/NEW.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default New;
