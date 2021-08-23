import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state) => {
  return {
    options: getOrderOptions(state),
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: payload => dispatch(setOrderOption(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);