import React from 'react';
import '../css/Header.css';

function Header() {
  const handleToggleSidebar = () => {
    const [sideBar] = document.getElementsByClassName('side-bar');
    const [content] = document.getElementsByClassName('wrapper-content');
    if (sideBar && sideBar.classList.contains('toggled'))
      sideBar.classList.remove('toggled');
    else sideBar.classList.add('toggled');
    if (content && content.classList.contains('toggled'))
      content.classList.remove('toggled');
    else content && content.classList.add('toggled');
  };

  return (
    <div className="header">
      <div className="header-option">
        <span>Admintrator</span>
        <i className="fas fa-sort-down" />
      </div>
    </div>
  );
}

export default Header;
