import React, { useState } from 'react';

import UserSearchBox from '../../components/User/UserSearchBox';
import UserTable from '../../components/User/UserTable';
import WrapperContent from '../../components/commons/WrapperContentPage';
import { useTranslation } from 'react-i18next';
import '../../css/UserList.css';

function UserList() {
  const [fullName, setFullName] = useState('');
  const [contractStatus, setContractStatus] = useState('');
  const [contractDateBegin, setContractDateBegin] = useState('');
  const [contractDateEnd, setContractDateEnd] = useState('');
<<<<<<< HEAD
  const [page, setPage] = useState(0);
  const { t, i18n } = useTranslation();
=======
  const [employeeStatus, setEmployeeStatus] = useState(1);
  const [page, setPage] = useState(1);
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
  return (
    <WrapperContent className="user-list-content">
      <h2 className="list-title">{t('USER.USER_LIST')}</h2>
      <UserSearchBox
        setPage={setPage}
        setFullName={setFullName}
        setContractStatus={setContractStatus}
        setContractDateBegin={setContractDateBegin}
        setContractDateEnd={setContractDateEnd}
        setEmployeeStatus={setEmployeeStatus}
      />
      <UserTable
        fullName={fullName}
        contractStatus={contractStatus}
        contractDateBegin={contractDateBegin}
        contractDateEnd={contractDateEnd}
        employeeStatus={employeeStatus}
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
