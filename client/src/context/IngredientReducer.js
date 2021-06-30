const reducer = (state, action) => {
	switch (action.type) {
		case "SET_INGREDIENTS":
			return {
				...state,
				filtered: state.ingredients,
			};
		case "FILTER_INGREDIENTS":
			return {
				...state,
				//eslint-disable-next-line
				filtered: state.ingredients.filter((ingredient) => {
					if (action.payload !== "All") {
						return ingredient.category === action.payload;
					}
				}),
			};
		default:
			return state;
	}
};

export default reducer;
