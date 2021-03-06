import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersList from '../pages/Userlist/UsersList';
import UserList from '../pages/User/UserList';
import UserRegist from '../pages/User/UserRegist';
import PrivateRoute from '../components/commons/PrivateRoute';

export default function DeviceRoutes() {
  return (
    <Switch>
      <Route path="/userslist" component={UsersList} />
      <PrivateRoute exact path="/users" component={UserList} />
      <Route exact path="/users/:id" component={UserRegist} />
    </Switch>
  );
}
