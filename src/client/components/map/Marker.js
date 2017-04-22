import React, { Component, PropTypes } from 'react';

import { Icon } from '../common';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.hoverToggle = this.hoverToggle.bind(this);
  }

  hoverToggle() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const { onClick, children, id } = this.props;
    return (
      <div
        className="marker"
        onClick={() => onClick(id)}
        onMouseEnter={this.hoverToggle}
        onMouseLeave={this.hoverToggle}
      >
        <Icon className="marker-icon" name="map-marker" />
        {this.state.hover && children}
      </div>
    );
  }
}

Marker.propTypes = {
  onClick: PropTypes.func.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default Marker;
