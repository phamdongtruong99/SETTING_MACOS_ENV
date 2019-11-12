import React from 'react';
import Intercom from 'react-intercom';

const withIntercom = Component => props => (
  <>
    <Intercom appID="hjukxd12" />
    <Component {...props} />
  </>
);

export default withIntercom;
