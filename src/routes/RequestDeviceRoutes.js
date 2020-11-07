import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RequestDeviceList from '../pages/RequestDevice/RequestDeviceList';
import RequestDeviceDetails from '../pages/RequestDevice/RequestDeviceDetails';

export default function RequestDeviceRoutes() {
  return (
    <Switch>
      <Route exact path="/request-devices" component={RequestDeviceList} />
      <Route
        exact
        path="/request-devices/:id"
        component={RequestDeviceDetails}
      />
    </Switch>
  );
}
