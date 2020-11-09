import React, { useState } from 'react';

import UserSearchBox from '../../components/User/UserSearchBox';
import UserTable from '../../components/User/UserTable';
import WrapperContent from '../../components/commons/WrapperContentPage';

import '../../css/UserList.css';

function UserList({ match }) {
  const [query, setQuery] = useState(undefined);

  function handleSearchUsers(queryObject) {
    setQuery(queryObject);
  }

  return (
    <WrapperContent className="user-list-content">
      <UserSearchBox onSearch={handleSearchUsers} />
      <UserTable query={query} onSearch={handleSearchUsers} match={match} />
    </WrapperContent>
  );
}

export default UserList;
