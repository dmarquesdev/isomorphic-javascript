import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>
          Hello World, I'm a Isomorphic React App :)
        </h3>

        <div>
          {this.props.children}
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/link1">Link 1</Link></li>
          <li><Link to="/link2">Link 2</Link></li>
        </ul>
      </div>
    );
  }
}
