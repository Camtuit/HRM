import React, { useState } from 'react';
import '../css/SideBar.css';
import { Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { showSideBar, hideSideBar } from '../reducers/siderBarReducer';
import { useSelector } from 'react-redux';

function SideBar() {
  // const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const isSideBarOpen = useSelector(state => state.sideBarReducer.isSideBarOpen);
  const dispatch = useDispatch();

  function handleClick() {
      if (isSideBarOpen) {
        dispatch(hideSideBar());
      }
      else {
        dispatch(showSideBar());
      }
  }

  return (
    <div style={{width: isSideBarOpen ? '230px' : '56px'}} className="side-bar">
        <div className="side-bar-header">
          <i onClick={handleClick} class="fas fa-bars"></i>
          <span>HRM</span>
        </div>
      
        <Link to="/users">
          <div className="side-bar-item" >
            <i class="fas fa-users"></i>
            <span>User List</span>
          </div>
        </Link>

        <Link to="/dayoffs">
          <div className="side-bar-item" >
            <i class="far fa-calendar-alt"></i>
            <span>Day Off List</span>
          </div>
        </Link>

        <Link to="/holiday">
          <div className="side-bar-item" >
            <i class="fas fa-table"></i>
            <span>Holiday List</span>
          </div>
        </Link>

        <Link to="/skills">
          <div className="side-bar-item" >
            <i class="fas fa-code"></i>
            <span>Skill List</span>
          </div>
        </Link>

        <Link to="/devices">
          <div className="side-bar-item">
            <i class="fas fa-laptop-code"></i>
            <span>Device List</span>
          </div>
        </Link>

        <Link to="/requestdevice">
          <div className="side-bar-item">
            <i class="fas fa-laptop-medical"></i>
            <span>Request Device List</span>
          </div>
        </Link>
    </div>
  );
}

export default SideBar;