import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function AuthenticatedGuard({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
}

export default AuthenticatedGuard;
