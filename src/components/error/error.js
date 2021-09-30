import { connect } from 'react-redux';
import { checkoutOrderErrorSelector } from '../../redux/selectors';
const ErrorOrder = ({ errorText }) => {
  return (
    <div>
      <h2>Error page!</h2>
      <span>{errorText}</span>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  errorText: checkoutOrderErrorSelector(state),
});
export default connect(mapStateToProps)(ErrorOrder);



