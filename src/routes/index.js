import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginRoutes from './LoginRoutes';
import HomeRoutes from './HomeRoutes';
import ErrorRoutes from './ErrorRoutes';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/error" component={ErrorRoutes} />
        <Route exact path="/login" component={LoginRoutes} />
        <Route path="/" component={HomeRoutes} />
      </Switch>
    </BrowserRouter>
  );
}
