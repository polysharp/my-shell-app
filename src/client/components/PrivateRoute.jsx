/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { useStore } from '../../store';

const ACCOUNT_SIGNIN = '/account/signin';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const store = useStore();

  if (!store.user.authenticated && location.pathname !== ACCOUNT_SIGNIN) {
    if (typeof window !== 'undefined') {
      navigate(ACCOUNT_SIGNIN);
    }
    return null;
  }

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PrivateRoute;
