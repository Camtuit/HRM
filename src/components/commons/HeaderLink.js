import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLink({ routes }) {
  return (
    <div style={{ display: 'flex', margin: '20px', fontSize: '18px' }}>
      {routes.map((route, index) => {
        if (index === 0)
          return (
            <Link to={route.path} style={{ marginRight: '3px' }}>
              <i className="fas fa-home" style={{ marginRight: '3px' }}></i>
              {route.title} /
            </Link>
          );
        if (index !== routes.length - 1) {
          return (
            <Link to={route.path} style={{ marginRight: '3px' }}>
              {route.title} /
            </Link>
          );
        }
        return <p>{route.title}</p>;
      })}
    </div>
  );
}

export default HeaderLink;
