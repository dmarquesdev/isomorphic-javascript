import React, { Component } from 'react';

import Icon from './Icon';

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  onClose() {
    if(this.props.onClose) {
      this.props.onClose();
    }

    this.setState({ visible: false });
  }

  render() {
    const {
      title,
      children
    } = this.props;

    const style = (!this.state.visible) ? { display: 'none' } : null;

    return (
      <div
        className="overlay"
        style={style}
      >
        <div className="dialog">
          <div className="dialog-header">
            <h5 className="dialog-title">{title}</h5>
            <a 
              className="dialog-close" 
              onClick={this.onClose.bind(this)}
            >
              <Icon name="close" />
            </a>
          </div>

          <div className="dialog-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
