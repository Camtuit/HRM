import React, { useEffect, useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

function PrivateRoute({ path, component }) {
  const token = localStorage.getItem('token');
  return token ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to="/error/401" />
  );
}

export default PrivateRoute;
