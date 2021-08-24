import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ price, currentValue, limits, setOptionValue }) => {
  return (
    <div className={styles.number}>
      <input type="number"
        className={styles.inputSmall}
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={event => setOptionValue(event.currentTarget.value)}></input>({formatPrice(price)})
    </div>
  );
};

export default OrderOptionNumber;