import React, { Component } from 'react';

import Icon from './Icon';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };
  }

  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { children, title } = this.props;

    return this.state.visible && (
      <div className="sidebar">
        <div className="sidebar-header">
          <a
            onClick={this.toggle.bind(this)}
            className="sidebar-close"
          >
            <Icon name="close" />
          </a>
        </div>
        <div className="sidebar-content">
          {children}
        </div>
      </div>
    );
  }
}

export default SideBar;
