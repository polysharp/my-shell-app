import React from 'react';
import PropTypes from 'prop-types';

import { Price } from '../../../../../../components/core';

const CardHeading = ({ name, subname, price, rate }) => (
  <div className="flex justify-between">
    <div className="flex flex-col flex-grow pr-8">
      <h2 className="text-lg font-semibold uppercase">{name}</h2>
      <p className="leading-tight">{subname}</p>
      <span className="flex items-center pt-1">
        {[...Array(rate.score)].map((n, i) => (
          <svg key={`${5 + i}`} viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z" />
          </svg>
        ))}
        <span className="pl-2 text-sm">{`(${rate.count})`}</span>
      </span>
    </div>
    <div>
      <Price value={price} />
    </div>
  </div>
);

CardHeading.propTypes = {
  name: PropTypes.string.isRequired,
  subname: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.shape({
    score: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardHeading;
