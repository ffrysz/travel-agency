import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';

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
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;