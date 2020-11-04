import React, { useState } from 'react';
import '../css/SideBar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSideBar, hideSideBar } from '../reducers/sideBarReducer';

function SideBar() {
  // const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );
  const dispatch = useDispatch();

  function handleClick() {
    if (isSideBarOpen) {
      dispatch(hideSideBar());
    } else {
      dispatch(showSideBar());
    }
  }

  return (
    <div
      style={{ width: isSideBarOpen ? '230px' : '56px' }}
      className="side-bar"
    >
      <div className="side-bar-header">
        <i onClick={handleClick} className="fas fa-bars" />
        <span>HRM</span>
      </div>

      <Link to="/users">
        <div className="side-bar-item">
          <i className="fas fa-users" />
          <span>User List</span>
        </div>
      </Link>

      <Link to="/dayoffs">
        <div className="side-bar-item">
          <i className="far fa-calendar-alt" />
          <span>Day Off List</span>
        </div>
      </Link>

      <Link to="/holiday">
        <div className="side-bar-item">
          <i className="fas fa-table" />
          <span>Holiday List</span>
        </div>
      </Link>

      <Link to="/skills">
        <div className="side-bar-item">
          <i className="fas fa-code" />
          <span>Skill List</span>
        </div>
      </Link>

      <Link to="/devices">
        <div className="side-bar-item">
          <i className="fas fa-laptop-code" />
          <span>Device List</span>
        </div>
      </Link>

      <Link to="/requestdevice">
        <div className="side-bar-item">
          <i className="fas fa-laptop-medical" />
          <span>Request Device List</span>
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
