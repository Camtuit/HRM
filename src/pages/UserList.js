import React from 'react';
import '../css/UserList.css';
import { Button, DatePicker, Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import UserSearchBox from '../components/User/UserSearchBox';
import UserTable from '../components/User/UserTable';
import AddDevicePopup from '../components/AddDevicePopup';

function UserList() {
  // get state from redux
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );

  return (
    <div
      style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
      className="user-list-content"
    >
      <UserSearchBox />
      <UserTable />
    </div>
  );
}

export default UserList;
