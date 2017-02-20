import React, { Component } from 'react';

import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
