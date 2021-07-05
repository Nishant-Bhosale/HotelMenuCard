import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import Ingredient from "../Ingredient/Ingredient";

const UserIngredients = () => {
	const dishContext = useContext(ingredientContext);
	console.log(dishContext);
	return (
		<div>
			{dishContext.userIngredients.map((ingredient) => {
				return <Ingredient ingredient={ingredient} />;
			})}
		</div>
	);
};

export default UserIngredients;
