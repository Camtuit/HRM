import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';

export default function HomeRoutes() {
  return <Route path="/login" component={Login} />;
}
