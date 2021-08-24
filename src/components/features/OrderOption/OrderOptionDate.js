import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = () => {

  return (
    <DatePicker selected={''} onChange={(date) => setStartDate(date)} />
  );
};

export default OrderOptionDate;