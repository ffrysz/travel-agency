import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import getOrderOptions from '../../../redux/orderRedux';

const mapStateToProps = (state) => {
  return {
    options: getOrderOptions(state.order.options),
  };
};

export default connect(mapStateToProps)(OrderForm);