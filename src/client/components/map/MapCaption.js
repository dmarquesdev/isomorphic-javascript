import React, { Component } from 'react';
import _ from 'lodash';

import { Icon } from '../common';
import {
  Categories,
  CategoryColor
} from '../../constants';

class MapCaption extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  renderMarkers() {
    return _.map(Categories, (v, k) => {
      const color = CategoryColor[k.toUpperCase()];
      return (
        <li key={color}>
          <Icon
            name="map-marker"
            className={`marker-icon ${color}`}
          />
          <span>{v}</span>
        </li>
      );
    });
  }

  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const visible = (this.state.visible) ? '__visible' : '__hidden';
    return (
      <div className={`map-caption ${visible} hidden-sm-down`}>
        <button
          onClick={this.toggle.bind(this)}
          className="btn btn-primary _button"
        >
          <Icon name="map-marker" />
          <span> Legenda</span>
        </button>
        <ul className="_list">
          {this.renderMarkers()}
        </ul>
      </div>
    );   
  }
}

export default MapCaption;
