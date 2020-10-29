import React from 'react';
import '../css/SideBarItem.css';
function SideBarItem({ icon, title, isSideBarOpen }) {
  return (
    <div className="side-bar-item">
      <div className="side-bar-item-icon">
        <i class={icon}></i>
      </div>

      <div style={{ display: isSideBarOpen ? 'block' : 'none' }}>{title}</div>
    </div>
  );
}

export default SideBarItem;
