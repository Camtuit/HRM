import React from 'react';
import { useTranslation } from 'react-i18next';
import WrapperContent from '../../components/commons/WrapperContentPage';
import Index from '../../components/UserList/ComponentTable/Index';
import UserSearch from '../../components/UserList/UserSearch';

function UsersList() {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <WrapperContent>
        <UserSearch> </UserSearch>
        {/* <UserSearchBox /> */}
        <Index />
      </WrapperContent>
    </div>
  );
}

export default UsersList;
