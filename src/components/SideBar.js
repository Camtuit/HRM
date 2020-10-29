import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import '../css/SideBar.css';
import SideBarItem from './SideBarItem';


function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function showMenu() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <div
      style={{
        width: isSideBarOpen ? '230px' : '56px',
      }}
      className="side-bar"
    >
      <div className="side-bar-header">
        <div className="side-bar-item-icon">
          <i onClick={showMenu} className="fas fa-bars" onKeyDown={()=>{}} role="button" tabIndex={0} aria-label="Icon" />
        </div>

        <div style={{ display: isSideBarOpen ? 'block' : 'none' }}>HRM</div>
      </div>

      <Link to="/userlist">
        <SideBarItem
          icon="fas fa-users"
          title="User List"
          isSideBarOpen={isSideBarOpen}
        />
      </Link>
      
      <Link to="dayofflist">
        <SideBarItem
          icon="far fa-calendar-alt"
          title="Day Off List"
          isSideBarOpen={isSideBarOpen}
        />
      </Link>
     
      <Link to="holidaylist">
        <SideBarItem
          icon="fas fa-table"
          title="Holiday List"
          isSideBarOpen={isSideBarOpen}
        />
      </Link>
     
      <Link to="skilllist">
        <SideBarItem
          icon="fas fa-code"
          title="Skill List"
          isSideBarOpen={isSideBarOpen}
        />  
      </Link>
    
      <Link to="devicelist">
        <SideBarItem
          icon="fas fa-laptop-code"
          title="Device List"
          isSideBarOpen={isSideBarOpen}
        />
      </Link>
     
      <Link to="devicelist">
        <SideBarItem
          icon="fas fa-laptop-medical"
          title="Request Device List"
          isSideBarOpen={isSideBarOpen}
        />
      </Link>
     
    </div>
  );
}

export default SideBar;
