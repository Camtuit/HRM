import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error401 from '../pages/Error/Error401';

function ErrorRoutes() {
  return (
    <Switch>
      <Route path="/error/401" component={Error401} />
    </Switch>
  );
}
export default ErrorRoutes;
