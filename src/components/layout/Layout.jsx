import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './components';

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
