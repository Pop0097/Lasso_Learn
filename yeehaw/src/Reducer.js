export const initialState = {
	user: null,
	search: ""
};

const reducer = (state, action) => {
	switch (action.type) {
		case "set_user":
			return {
				...state,
				user: action.user,
			};
		case "set_search":
			return {
				...state,
				search: action.search_value,
			};
		default:
			return state;
	}
};

export default reducer;
