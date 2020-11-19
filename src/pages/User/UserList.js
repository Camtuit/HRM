import React, { useState } from 'react';

import UserSearchBox from '../../components/User/UserSearchBox';
import UserTable from '../../components/User/UserTable';
import WrapperContent from '../../components/commons/WrapperContentPage';

import '../../css/UserList.css';

function UserList() {
  const [fullName, setFullName] = useState('');
  const [contractStatus, setContractStatus] = useState('');
  const [contractDateBegin, setContractDateBegin] = useState('');
  const [contractDateEnd, setContractDateEnd] = useState('');
  const [page, setPage] = useState(1);
  return (
    <WrapperContent className="user-list-content">
      <h2 className="list-title">User List</h2>
      <UserSearchBox
        setPage={setPage}
        setFullName={setFullName}
        setContractStatus={setContractStatus}
        setContractDateBegin={setContractDateBegin}
        setContractDateEnd={setContractDateEnd}
      />
      <UserTable
        fullName={fullName}
        contractStatus={contractStatus}
        contractDateBegin={contractDateBegin}
        contractDateEnd={contractDateEnd}
        page={page}
        setPage={setPage}
        setFullName={setFullName}
        setContractStatus={setContractStatus}
        setContractDateBegin={setContractDateBegin}
        setContractDateEnd={setContractDateEnd}
      />
    </WrapperContent>
  );
}

export default UserList;
