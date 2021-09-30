import { ERRORPAGE_LEAVE } from "../constants";

export default (state = { message: "Что-то пошло не так"}, action) => {

	const { type, errorMessage } = action;

	switch(type) {
		case ERRORPAGE_LEAVE: 
		return {
			message: "Что-то пошло не так"
		}
		default: 

		if(action.errorMessage) return {
				...state,
			message: errorMessage
		}

		return state;
	}
}