import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import { toggleSideBar } from '../actions/utilsAction';
import constanst from '../constants/htmlConstants';
import ReactLogo from '../assets/images/nal_logo.svg';

function Header() {
  const toggledSideBar = useSelector((state) => state.toggledSideBar);
  const dispatch = useDispatch();
  const {
    WIDTH_SIDE_BAR: { FULL, SHORT },
  } = constanst;
  const styleLogo = {
    width: toggledSideBar ? FULL : SHORT,
  };
  const styleWrapperLogo = {
    width: `transform: translateX(${toggledSideBar ? 0 : `-110%`}px)`,
  };
  const handleToggleSidebar = () => {
    dispatch(toggleSideBar());
  };
  return (
    <header className="header">
      <div className="nav_logo" style={styleLogo}>
        <Link to="/">
          <div className="wrapper-logo" style={styleWrapperLogo}>
            <ReactLogo className="logo" alt="Logo" />
            {toggledSideBar && (
              <span>
                <b>NAL</b>Hrm
              </span>
            )}
          </div>
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
