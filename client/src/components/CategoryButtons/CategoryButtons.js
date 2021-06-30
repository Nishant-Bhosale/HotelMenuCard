import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import "./CategoryButtons.css";
const CategoryButtons = () => {
	const dishContext = useContext(ingredientContext);

	const { ingredients } = dishContext;
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
		console.log(`button clicked ${category}`);
		console.log(category.target.innerHTML);
		ingredients.filter((ingredient) => {
			console.log(ingredient.category !== "Pizza");
			return ingredient.category !== category.target.innerHTML;
		});
	};

	return (
		<div className="buttons-container">
			{categories.map((category, index) => {
				return (
					<button
						id={index}
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
