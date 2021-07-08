import {
	ADD_INGREDIENTS,
	SET_ALL_INGREDIENTS,
	FILTER_INGREDIENTS,
	REMOVE_INGREDIENTS,
	CHANGE_PRICE,
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
		case REMOVE_INGREDIENTS:
			return {
				...state,
				userIngredients: state.userIngredients.filter((ingredient) => {
					return ingredient.id !== action.payload.id;
				}),
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
		case CHANGE_PRICE:
			state.ingredients.forEach((ing) => {
				if (action.payload.id === ing.id) {
					if (ing.priceOption) {
						console.log(action.payload);
						if (action.payload.optionType === "medium") {
							ing.price = 160;
						} else if (action.payload.optionType === "large") {
							ing.price = 310;
						}
					}
				}
			});
			return {
				...state,
			};
		default:
			return state;
	}
};

export default reducer;
