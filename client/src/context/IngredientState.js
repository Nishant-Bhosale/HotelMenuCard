import { useReducer } from "react";
// import axios from "axios";
import ingredientContext from "./IngredientContext";
import ingredientReducer from "./IngredientReducer";
import {
	ADD_INGREDIENTS,
	SET_ALL_INGREDIENTS,
	FILTER_INGREDIENTS,
	REMOVE_INGREDIENTS,
} from "./types";

const IngredientState = (props) => {
	const initialState = {
		ingredients: [
			{
				name: "Vegetable Pizza",
				desc: "Capsicum, Onion, Tomato, Beans, Carrot, Flower, Cheese",
				id: 1,
				image:
					"https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				price: {
					medium: 160,
					large: 310,
				},
				category: "Pizza",
			},
			{
				name: "Aloo Tikki",
				price: 70,
				id: 2,
				category: "Sandwich",
			},
			{
				name: "Chicken Burger",
				price: 90,
				id: 3,
				category: "Burger",
			},
			{
				name: "Paneer Momos",
				price: 100,
				id: 4,
				category: "Momos",
			},
			{
				name: "Peri-Peri",
				price: 70,
				id: 5,
				category: "Fries",
			},
			{
				name: "Chicken nuggets (6 pieces)",
				price: 100,
				id: 6,
				category: "Snacks",
			},
		],
		filtered: [],
		userIngredients: [],
	};

	const [state, dispatch] = useReducer(ingredientReducer, initialState);

	const setAllIngredients = () => {
		dispatch({ type: SET_ALL_INGREDIENTS });
	};

	const filterIngredients = (category) => {
		dispatch({ type: FILTER_INGREDIENTS, payload: category });
	};

	const addIngredients = (ingredient) => {
		dispatch({ type: ADD_INGREDIENTS, payload: ingredient });
	};

	const removeIngredient = (ingredient) => {
		dispatch({ type: REMOVE_INGREDIENTS, payload: ingredient });
	};

	return (
		<ingredientContext.Provider
			value={{
				ingredients: state.ingredients,
				filtered: state.filtered,
				userIngredients: state.userIngredients,
				filterIngredients,
				setAllIngredients,
				addIngredients,
				removeIngredient,
			}}
		>
			{props.children}
		</ingredientContext.Provider>
	);
};

export default IngredientState;
