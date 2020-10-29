import React from 'react';
import '../css/UserList.css';
import { Button, DatePicker, Checkbox } from 'antd';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import UserSearchBox from '../components/UserSearchBox';
import UserTable from '../components/UserTable';

function UserList() {
  return (
    <div>
      <SideBar />
      <Header />
      <div className="user-list-content">
        <UserSearchBox />
        <UserTable/>
      </div>

    </div>
  );
}

export default UserList;


