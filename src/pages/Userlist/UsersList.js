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
        <h2 className="list-title">{t('USER.USER_LIST')}</h2>
        <UserSearch />

        <Index />
      </WrapperContent>
    </div>
  );
}

export default UsersList;
