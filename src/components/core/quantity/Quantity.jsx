import React from 'react';
import PropTypes from 'prop-types';

const Quantity = ({ quantity, setQuantity }) => {
  const handleQuantityChange = (event) => {
    if (event.target.value > 0 && event.target.value <= 99) {
      setQuantity(event.target.value);
    }
  };

  const handleQuantityChangeUp = () => {
    if (quantity + 1 <= 99) setQuantity(quantity + 1);
  };

  const handleQuantityChangeDown = () => {
    if (quantity - 1 >= 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        aria-label="Reduce quantity"
        onClick={() => handleQuantityChangeDown()}
        className="block p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M0 10h24v4h-24z" />
        </svg>
      </button>
      <div className="px-2">
        <input
          type="number"
          min="0"
          max="99"
          value={quantity}
          onChange={(e) => handleQuantityChange(e)}
          className="block px-2 font-medium text-center"
        />
      </div>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => handleQuantityChangeUp()}
        className="block p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
      </button>
    </div>
  );
};

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default Quantity;
