import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings.js';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import Button from '../../common/Button/Button.js';

const sendOrder = (options, tripCost, tripId, tripName, countryId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryId,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    }).then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = (props) => {
  return (
    <Grid>
      <Row>
        {pricing.map(options => (
          <Col md={4} key={options.id}><OrderOption {...options} currentValue={props.options[options.id]} setOrderOption={props.setOrderOption} /></Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={props.tripCost} options={props.options} />
        </Col>
      </Row>
      <Button onClick={() => sendOrder(props.options, props.tripCost, props.tripId, props.tripName, props.countryId)}>Order now!</Button>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  countryId: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;