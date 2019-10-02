import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuthen = Component => props => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return <Component {...props} />;
};

export default withAuthen;
