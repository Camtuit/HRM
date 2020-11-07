import React from 'react';
import UserSearchBox from '../../components/User/UserSearchBox';
import UserTable from '../../components/User/UserTable';
import AddDevicePopup from '../../components/AddDevicePopup';
import WrapperContent from '../../components/commons/WrapperContentPage';
import '../../css/UserList.css';

function UserList() {
  return (
    <WrapperContent className="user-list-content">
      <UserSearchBox />
      <UserTable />
    </WrapperContent>
  );
}

export default UserList;
