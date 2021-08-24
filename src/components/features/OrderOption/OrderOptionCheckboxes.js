import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionCheckboxes = ({ values, currentValue, setOptionValue }) => {

  const newValueSet = (currentValue, id, checked) => {
    if (checked) {
      return [
        ...currentValue,
        id,
      ];
    } else {
      return currentValue.filter(value => value != id);
    }
  };

  return (
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label key={value.id} >
          <input type='checkbox'
            value={value.id}
            checked={currentValue.includes(value.id) ? true : false}
            onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))} />
          {value.name}({formatPrice(value.price)})
        </label>
      ))}
    </div>
  );
};

export default OrderOptionCheckboxes;