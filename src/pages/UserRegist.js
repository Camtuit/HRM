import React from 'react';
import '../css/UserRegist.css';
import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';

function UserRegist() {
  return (
    <div className="user-regist">
      <Header />
      <SideBar />

      <div className="user-regist-content" />
    </div>
  );
}

export default UserRegist;
