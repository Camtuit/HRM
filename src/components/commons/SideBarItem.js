import React from 'react';
import { Link } from 'react-router-dom';

function SideBarItem({ name = '', path = '', children }) {
  return (
    <Link to={path}>
      <div className="side-bar__item">
        {children}
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default SideBarItem;
