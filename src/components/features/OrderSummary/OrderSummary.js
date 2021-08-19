import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

const OrderSummary = (props) => {
  return (
    <h2 className={styles.component}>
      Total: <strong>{props.tripCost}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
};

export default OrderSummary;