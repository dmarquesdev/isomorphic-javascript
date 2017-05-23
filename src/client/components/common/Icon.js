import React from 'react';

const Icon = ({ name, className }) => (
  <i className={`fa fa-${name} ${className}`} />
);

export default Icon;
