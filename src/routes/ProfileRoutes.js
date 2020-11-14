import React from 'react';
import {Route, Switch } from 'react-router-dom';
import ProfileDetail from '../pages/Profile/ProfileDetail'
function ProfileRoutes() {
    return (
      <Switch>
        <Route exact path="/profile/details" component={ProfileDetail} />
      </Switch>
    );
  }
  
export default ProfileRoutes;