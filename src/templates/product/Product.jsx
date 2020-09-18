import React from 'react';
import PropTypes from 'prop-types';

import { CardInformation, CardPurchase } from './components';

const Product = ({ pageContext: { product } }) => (
  <div className="container pt-12">
    <div className="grid grid-cols-12 gap-x-5">
      <div className="col-span-8">
        <CardInformation product={product} />
      </div>
      <div className="col-span-4">
        <CardPurchase product={product} />
      </div>
    </div>
  </div>
);

Product.propTypes = {
  pageContext: PropTypes.shape({
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      subname: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rate: PropTypes.shape({
        score: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;
