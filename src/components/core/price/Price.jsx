import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Price = ({ value }) => {
  const [formatedPrice, setFormatedPrice] = useState({ integer: value, decimal: null });

  useEffect(() => {
    const formatPrice = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2 })
      .format(value / 100)
      .split(',');
    setFormatedPrice({
      integer: formatPrice[0],
      decimal: formatPrice[1] !== '00' ? formatPrice[1] : null,
    });
  }, [value]);

  return (
    <span className="flex items-start justify-between">
      <span className="text-2xl font-semibold leading-6">{formatedPrice.integer}</span>
      <span className="text-xs font-semibold">
        {formatedPrice.decimal && `,${formatedPrice.decimal}`}
        <span className="pl-1">€</span>
      </span>
    </span>
  );
};

Price.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Price;
