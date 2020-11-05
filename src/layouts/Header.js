import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

function Header() {
  const handleToggleSidebar = () => {
    const [sideBar] = document.getElementsByClassName('side-bar');
    if (sideBar.classList.contains('toggled'))
      sideBar.classList.remove('toggled');
    else sideBar.classList.add('toggled');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <b>Nals</b>HRM
        </Link>
      </div>
      <div className="nav nav-bar">
        <div
          className="sidebar-toggle"
          onClick={handleToggleSidebar}
          data-toggle="push-menu"
          role="button"
        >
          <i className="fas fa-bars" />
        </div>
        <div className="dropdown user-menu">
          <Avatar
            alt="Avatar"
            size="large"
            src="https://www.flaticon.com/premium-icon/icons/svg/2202/2202112.svg"
          />
          <i className="fas fa-sort-down" />
        </div>
      </div>
    </header>
  );
}

export default Header;
