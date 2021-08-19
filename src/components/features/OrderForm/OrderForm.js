import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OrderForm = (props) => {
  return (
    <Grid>
      <Row>
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
};

export default OrderForm;