import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import calculateTotal from '../../../utils/calculateTotal';
import formatPrice from '../../../utils/formatPrice';

const OrderSummary = (props) => {
  console.log(props);

  // const totalCost = formatPrice(calculateTotal(props.tripCost, props.options));
  const totalCost = 100;

  return (
    <h2 className={styles.component}>
      Total: <strong>{totalCost}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;