import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error403 from '../pages/Error/Error403';
import Error401 from '../pages/Error/Error401';

function ErrorRoutes() {
  return (
    <Switch>
      <Route path="/error/401" component={Error401} />
      <Route path="/error/403" component={Error403} />
    </Switch>
  );
}
export default ErrorRoutes;
