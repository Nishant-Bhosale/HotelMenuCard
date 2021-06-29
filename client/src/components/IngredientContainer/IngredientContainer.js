import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";

const IngredientContainer = () => {
	const newContext = useContext(ingredientContext);

	return (
		<div>
			{newContext.ingredients.map((ingredient, index) => {
				return <h1 key={index}>{ingredient.name}</h1>;
			})}
		</div>
	);
};

export default IngredientContainer;
