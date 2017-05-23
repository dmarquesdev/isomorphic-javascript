import React from 'react';

const Card = ({ children, title, className, onClick }) => (
  <div className={`mycard ${className}`} onClick={onClick}>
    {children}
  </div>
);

export default Card;
