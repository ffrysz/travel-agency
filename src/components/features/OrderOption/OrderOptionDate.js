import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ setOptionValue }) => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker selected={startDate} onChange={(date) => {
      setOptionValue(date);
      setStartDate(date);
    }} />
  );
};

export default OrderOptionDate;