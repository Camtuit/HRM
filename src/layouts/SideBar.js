import React, { useState } from 'react';
import '../css/SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="side-bar">
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
