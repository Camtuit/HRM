import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserList from '../pages/User/UserList';
import UserRegist from '../pages/User/UserRegist';


export default function DeviceRoutes() {
  return (
    <Switch>
      <Route exact path="/users" component={UserList} />
      <Route exact path="/users/:id" component={UserRegist} />
    </Switch>
  );
}
