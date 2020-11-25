import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginRoutes from './LoginRoutes';
import HomeRoutes from './HomeRoutes';
// import ErrorRoutes from './ErrorRoutes';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exct path="/error/401" component={ErrorRoutes} /> */}
        <Route exact path="/login" component={LoginRoutes} />
        <Route exact path="/" component={HomeRoutes} />
      </Switch>
    </BrowserRouter>
  );
}
