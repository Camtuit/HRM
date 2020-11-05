import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import DeviceList from '../pages/Device/DeviceList';
import DeviceDetails from '../pages/Device/DeviceDetail';

export default function DeviceRoutes() {
  return (
    <Switch>
      <Route exact path="/devices" component={DeviceList} />
      <Route exact path="/devices/:id/details" component={DeviceDetails} />
    </Switch>
  );
}
