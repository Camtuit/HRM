import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileDetail from '../pages/Profile/ProfileDetail'

export default function DropdownUser() {
    return (
      <Switch>
        <Route exact path="/profile-detail/:id" component={ProfileDetail} />
      </Switch>
    );
  }