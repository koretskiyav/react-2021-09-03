import { useEffect } from "react";
import { connect } from "react-redux"
import { errorPageLeave } from "../../redux/actions";
import { errorMessageSelector } from "../../redux/selectors"

function Error( { errorMessage, onUnmount } ) {

	useEffect(() => () => onUnmount());

	return(
		<div>
			<h2>
				{errorMessage}
			</h2>
		</div>
	)
}

const mapStateToProps = (state) => ({
	errorMessage: errorMessageSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	onUnmount: () => dispatch(errorPageLeave()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Error);