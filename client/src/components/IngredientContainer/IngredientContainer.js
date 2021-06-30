import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import Ingredient from "../Ingredient/Ingredient";
import "./IngredientContainer.css";

const IngredientContainer = () => {
	const dishContext = useContext(ingredientContext);

	return (
		<div className="container">
			{dishContext.ingredients.map((ingredient, index) => {
				return <Ingredient ingredient={ingredient} key={index} />;
			})}
		</div>
	);
};

export default IngredientContainer;
