import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import { toggleSideBar } from '../actions/utilsAction';
import { deviceSizeFixed } from '../constants/deviceSize';

function Header() {
  const isLaptop = window.innerWidth >= deviceSizeFixed.laptop;
  const dispatch = useDispatch(toggleSideBar(true));

  const handleToggleSidebar = () => {
    dispatch(toggleSideBar());
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
