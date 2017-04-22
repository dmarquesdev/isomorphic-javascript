import React from 'react';

const Card = ({ children, title, className }) => (
  <div className={`mycard ${className}`}>
    {children}
  </div>
);

export default Card;
