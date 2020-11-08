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

import SideBarItem from '../components/commons/SideBarItem';
import constanst from '../constants/htmlConstants';
import { LIST } from '../constants/textLabel';
import { toggleSideBar } from '../actions/utilsAction';

function SideBar() {
  const toggledSideBar = useSelector((state) => state.toggledSideBar);
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSideBar());
  };
  const {
    WIDTH_SIDE_BAR: { FULL, SHORT },
  } = constanst;
  const style = {
    width: toggledSideBar ? FULL : SHORT,
  };
  return (
    <div className="side-bar" style={style}>
      <div className="side-bar-container">
        <div className="side-bar__icon">
          <FontAwesomeIcon
            className={!toggledSideBar ? 'open' : ''}
            onClick={handleToggleSidebar}
            icon={!toggledSideBar ? faPlus : faMinus}
          />
        </div>
        <SideBarItem name={LIST.USER} path="/users">
          <div className="icon-25">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </SideBarItem>
        <SideBarItem name={LIST.DAY_OFF} path="/dayoffs">
          <div className="icon-25">
            <FontAwesomeIcon icon={faCalendarDay} />
          </div>
        </SideBarItem>
        <SideBarItem name={LIST.HOLIDAY} path="/holidays">
          <div className="icon-25">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
        </SideBarItem>
        <SideBarItem name={LIST.SKILL} path="/skills">
          <div className="icon-25">
            <FontAwesomeIcon icon={faCogs} />
          </div>
        </SideBarItem>
        <SideBarItem name={LIST.DEVICE} path="/devices">
          <div className="icon-25">
            <FontAwesomeIcon icon={faLaptopCode} />
          </div>
        </SideBarItem>
        <SideBarItem name={LIST.REQUEST_DEVICE} path="/request-devices">
          <div className="icon-25">
            <FontAwesomeIcon icon={faLaptopMedical} />
          </div>
        </SideBarItem>
      </div>
    </div>
  );
}

export default SideBar;
