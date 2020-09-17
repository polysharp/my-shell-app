/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const user = types
  .model('User', {
    authenticated: false,
  })
  .views(() => ({}))
  .actions(() => ({}));

export default user;
