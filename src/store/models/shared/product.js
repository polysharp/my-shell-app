/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const product = types
  .model('Product', {
    name: '',
  })
  .views(() => ({}))
  .actions(() => ({}));

export default product;
