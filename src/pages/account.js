import React from 'react';
import { Router } from '@reach/router';

import { PrivateRoute, SignIn, SignUp, Account, Orders } from '../client';

const AccountRouter = () => (
  <Router basepath="/account">
    <SignUp path="/signup" />
    <SignIn path="/signin" />
    <PrivateRoute path="/orders" component={Orders} />
    <PrivateRoute path="/" component={Account} />
  </Router>
);

export default AccountRouter;
