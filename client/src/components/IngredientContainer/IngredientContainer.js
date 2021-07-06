import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import Ingredient from "../Ingredient/Ingredient";
import "./IngredientContainer.css";

const IngredientContainer = () => {
	const dishContext = useContext(ingredientContext);

	const { filtered, ingredients } = dishContext;
	return (
		<div className="container">
			{filtered.length > 0
				? filtered.map((ingredient, index) => {
						return (
							<Ingredient
								addToCart={true}
								ingredient={ingredient}
								key={index}
							/>
						);
				  })
				: ingredients.map((ingredient, index) => {
						return (
							<Ingredient
								addToCart={true}
								ingredient={ingredient}
								key={index}
							/>
						);
				  })}
		</div>
	);
};

export default IngredientContainer;
