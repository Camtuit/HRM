import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { Avatar, Menu, Dropdown, Icon, Button } from 'antd';

import { List } from 'antd/lib/form/Form';
import { toggleSideBar } from '../actions/utilsAction';
import constanst from '../constants/htmlConstants';
import ReactLogo from '../assets/images/nal_logo.svg';
import textLabel, { LIST } from '../constants/textLabel';
import types from '../constants/apiResourceTypes';
import AppActions from '../redux/App/action';
import { useTranslation } from 'react-i18next';

function Header() {
  const history = useHistory();
  const [t, i18n] = useTranslation();
  const [name, setName] = useState('Phạm Thị Cẩm Tú');
  const [isProfileBoxOpen, setIsProfileBoxOpen] = useState(false);
  const [checkLogin, setcheckLogin] = useState('Logout');
  const toggledSideBar = useSelector((state) => state.App.toggledSideBar);
  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem('user'));
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
    dispatch(AppActions.toggleSideBar());
  };

  onclick = function (e) {
    if (e.target.matches('#avatar img')) {
      setIsProfileBoxOpen(!isProfileBoxOpen);
    } else {
      setIsProfileBoxOpen(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <header className="header">
      <div className="nav_logo" style={styleLogo}>
        <Link to="/">
          <div className="wrapper-logo" style={styleWrapperLogo}>
            <ReactLogo className="logo" alt="Logo" />
            {toggledSideBar ? (
              <span>
                <b>{t('login.nals')}</b>Hrm
              </span>
            ) : (
              ''
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
            style={{ border: isProfileBoxOpen ? ' #0483f7 solid 2px' : 'none' }}
            alt="Avatar"
            size="large"
            src={userData.avatar}
            id="avatar"
          />
          <i className="fas fa-sort-down avatar"></i>
        </div>
        <div
          className="dropdown-list-menu"
          style={{ display: isProfileBoxOpen ? 'block' : 'none' }}
        >
          <Menu>
            <Menu.Item
              style={{
                backgroundColor: isProfileBoxOpen ? 'white' : '#e6f7ff',
              }}
            >
              {LIST.Hi} {userData.full_name}
            </Menu.Item>
            <Menu.Item>
              <Link to="/profile/details">{t('profile.my_profile')}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/request-devices">{t('profile.request_divice')}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to="/login"
                className="check-login-logout"
                onClick={handleLogout}
              >
                {t('profile.logout')}
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default withRouter(Header);
