/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';
import Product from './shared';

const cart = types
  .model('Cart', {
    products: types.optional(types.array(Product), []),
  })
  .views(() => ({}))
  .actions(() => ({}));

export default cart;
