import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import "./CategoryButtons.css";
const CategoryButtons = () => {
	const dishContext = useContext(ingredientContext);

	const { filterIngredients, setAllIngredients } = dishContext;
	const categories = [
		"All",
		"Pizza",
		"Burger",
		"Sandwich",
		"Momos",
		"Fries",
		"Snacks",
		"Juices",
	];

	const clicked = (category) => {
		if (category.target.innerHTML === "All") {
			setAllIngredients();
		}
		filterIngredients(category.target.innerHTML);
	};

	return (
		<div className="buttons-container">
			{categories.map((category, index) => {
				return (
					<button
						key={index}
						className="category-button"
						onClick={(category) => clicked(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default CategoryButtons;
