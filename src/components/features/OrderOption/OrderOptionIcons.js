import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => {
  return (
    <div className={styles.component}>
      {required ? '' : (
        <div className={styles.icon} onClick={event => setOptionValue('')}>
          <Icon name={'times-circle'} />None
        </div>
      )}
      {values.map(value => (
        <div className={styles.icon} key={value.id} onClick={event => console.log(event.currentTarget.id)}>
          <Icon name={value.icon} />{value.name}({formatPrice(value.price)})
        </div>
      ))}
    </div>
  );
};

export default OrderOptionIcons;