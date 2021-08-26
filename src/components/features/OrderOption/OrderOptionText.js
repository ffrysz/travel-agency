import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue }) => {
  return (
    <div>
      <input type="text" onChange={event => setOptionValue(event.currentTarget.value)}></input>
    </div>
  );
};

export default OrderOptionText;