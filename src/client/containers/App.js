import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Footer, Loading } from '../components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
        <Footer />
        {this.props.loading && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = ({ loading }) => {
  return { loading: loading.show };
};

export default connect(mapStateToProps)(App);
