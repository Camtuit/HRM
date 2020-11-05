import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';

export default function HomeRoutes() {
  return <Route exact path="/login" component={Login} />;
}
