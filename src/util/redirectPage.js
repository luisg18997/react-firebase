import React from 'react'
import history from './history';
import { Route, Redirect } from 'react-router-dom';

export const handleRedirect = (route, state) => {
  console.log(history);
  history.push(route, {...state})
}

export const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  console.log(authenticated);
 return <Route render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/" />)} {...rest} />;
};
