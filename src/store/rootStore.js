/* eslint-disable global-require */
import { types } from 'mobx-state-tree';
import { connectReduxDevtools } from 'mst-middlewares';
import { User, Cart } from './models';

const RootStore = types.model('RootStore', {
  user: User,
  cart: Cart,
});

const rootStore = RootStore.create({ user: {}, cart: {} });

if (process.env.NODE_ENV !== 'production') {
  connectReduxDevtools(require('remotedev'), rootStore);
}

export default rootStore;
