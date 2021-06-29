import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import Ingredient from "../Ingredient/Ingredient";
import "./IngredientContainer.css";

const IngredientContainer = () => {
	const newContext = useContext(ingredientContext);

	return (
		<div className="container">
			{newContext.ingredients.map((ingredient, index) => {
				return <Ingredient ingredient={ingredient} key={index} />;
			})}
		</div>
	);
};

export default IngredientContainer;
