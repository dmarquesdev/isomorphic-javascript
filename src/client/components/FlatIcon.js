import React, { PropTypes } from 'react';

const FlatIcon = ({ name, width, height }) => (
  <img
    alt={name}
    className="flat-icon"
    src={`/assets/icons/${name}.svg`}
    style={{ width, height }}
  />
);

FlatIcon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

FlatIcon.defaultProps = {
  width: 50,
  height: 50,
};

export default FlatIcon;
