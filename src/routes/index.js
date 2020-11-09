import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginRoutes from './LoginRoutes';
import HomeRoutes from './HomeRoutes';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginRoutes} />
        <Route path="/" component={HomeRoutes} />
      </Switch>
    </BrowserRouter>
  );
}
