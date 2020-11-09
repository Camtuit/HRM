import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SideBarItem({ name = '', path = '', children }) {
  return (
    <Link to={path}>
      <div className="side-bar__item">
        {children}
        <span className="side-bar__title">{name}</span>
      </div>
    </Link>
  );
}

export default SideBarItem;
