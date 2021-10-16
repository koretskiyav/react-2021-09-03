import { connect } from 'react-redux';
import { selectedError } from '../../redux/selectors';

const ErrorComponent = ({error}) =>{
  console.log(error);
  return (<h1>{error}</h1>);
}
const mapStateToProps = (state, props)=> ({
  error: selectedError(state, props)
});

export default connect(mapStateToProps, null)(ErrorComponent);