import React from 'react';
import '../css/UserList.css';
import { Button, DatePicker, Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import UserSearchBox from '../components/UserSearchBox';
import UserTable from '../components/UserTable';

function UserList() {
  // get state from redux
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );

  return (
    <div>
      <SideBar />
      <Header />
      <div
        style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
        className="user-list-content"
      >
        <UserSearchBox />
        <UserTable />
      </div>
    </div>
  );
}

export default UserList;
