import { connect } from 'react-redux';
import { orderErrorSelector } from '../../../redux/selectors';

const Error = ({error}) => {
  return (
    <div>
      {error}
    </div>
  )
}

const mapStateToProps = (state) => ({
  error: orderErrorSelector(state)
})

export default connect(mapStateToProps)(Error);