import { useReducer } from "react";
// import axios from "axios";
import ingredientContext from "./IngredientContext";
import ingredientReducer from "./IngredientReducer";

const IngredientState = (props) => {
	const initialState = {
		ingredients: [
			{
				name: "Vegetable Pizza",
				desc: "Capsicum, Onion, Tomato, Beans, Carrot, Flower, Cheese",
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
				category: "Sandwich",
			},
			{
				name: "Chicken Burger",
				price: 90,
				category: "Burger",
			},
			{
				name: "Paneer Momos",
				price: 100,
				category: "Momos",
			},
			{
				name: "Peri-Peri",
				price: 70,
				category: "Fries",
			},
			{
				name: "Chicken nuggets (6 pieces)",
				price: 100,
				category: "Snacks",
			},
		],
	};

	const [state, dispatch] = useReducer(ingredientReducer, initialState);

	return (
		<ingredientContext.Provider
			value={{
				ingredients: state.ingredients,
			}}
		>
			{props.children}
		</ingredientContext.Provider>
	);
};

export default IngredientState;
