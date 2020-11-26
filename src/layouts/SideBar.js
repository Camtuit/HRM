import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarDay,
  faCalendar,
  faCogs,
  faLaptopCode,
  faLaptopMedical,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { Link, useHistory } from 'react-router-dom';
import SideBarItem from '../components/commons/SideBarItem';
import { LIST } from '../constants/textLabel';
import { toggleSideBar } from '../actions/utilsAction';

function SideBar({ active, onChangeTab }) {
  const toggledSideBar = useSelector((state) => state.toggledSideBar);
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSideBar());
  };
  const url = useHistory();
  const pathName = url.location.pathname;

  return (
    <div className={`side-bar ${toggledSideBar ? 'expanded' : 'collapsed'}`}>
      <div className="side-bar-container ">
        <div className="side-bar__icon">
          <FontAwesomeIcon
            className={!toggledSideBar ? 'open' : ''}
            onClick={handleToggleSidebar}
            icon={!toggledSideBar ? faPlus : faMinus}
          />
        </div>
        <Link to="/users" onClick={() => onChangeTab(1)}>
          <div
            className={`side-bar__item ${
              pathName === '/users' || pathName === '/user' ? 'active' : ''
            }`}
          >
            <div className="icon-25">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <span className="side-bar__title">{LIST.USER}</span>
          </div>
        </Link>

        <Link to="/days-off" onClick={() => onChangeTab(2)}>
          <div
            className={`side-bar__item ${
              pathName === '/days-off' || pathName === '/dayoff' ? 'active' : ''
            }`}
          >
            <div className="icon-25">
              <FontAwesomeIcon icon={faCalendarDay} />
            </div>
            <span className="side-bar__title">{LIST.DAY_OFF}</span>
          </div>
        </Link>
        <Link to="/holidays">
          <div
            className={`side-bar__item ${
              pathName === '/holidays' ? 'active' : ''
            }`}
          >
            {' '}
            <div className="icon-25">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <span className="side-bar__title">{LIST.HOLIDAY}</span>
          </div>
        </Link>
        <Link to="/skills">
          <div
            className={`side-bar__item ${
              pathName === '/skills' ? 'active' : ''
            }`}
          >
            {' '}
            <div className="icon-25">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <span className="side-bar__title">{LIST.SKILL}</span>
          </div>
        </Link>
        <Link to="/devices">
          <div
            className={`side-bar__item ${
              pathName === '/devices' ? 'active' : ''
            }`}
          >
            {' '}
            <div className="icon-25">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <span className="side-bar__title">{LIST.DEVICE}</span>
          </div>
        </Link>
        <Link to="/request-devices">
          <div
            className={`side-bar__item ${
              pathName === '/request-devices' || pathName === '/request-device'
                ? 'active'
                : ''
            }`}
          >
            {' '}
            <div className="icon-25">
              <FontAwesomeIcon icon={faLaptopMedical} />
            </div>
            <span className="side-bar__title">{LIST.REQUEST_DEVICE}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
