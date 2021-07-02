import {
	ADD_INGREDIENTS,
	SET_ALL_INGREDIENTS,
	FILTER_INGREDIENTS,
	REMOVE_INGREDIENTS,
} from "./types";

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_INGREDIENTS:
			return {
				...state,
				userIngredients: state.userIngredients.concat(action.payload),
			};
		case SET_ALL_INGREDIENTS:
			return {
				...state,
				filtered: state.ingredients,
			};

		case FILTER_INGREDIENTS:
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
