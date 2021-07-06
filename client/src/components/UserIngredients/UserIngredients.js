import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import Ingredient from "../Ingredient/Ingredient";
import "./UserIngredients.css";
const UserIngredients = () => {
	const dishContext = useContext(ingredientContext);
	console.log(dishContext);
	return (
		<div className="user-ingredients">
			{dishContext.userIngredients.length <= 0 ? (
				<h1 style={{ textAlign: "center", color: "green" }}>
					No Items found in your Cart
				</h1>
			) : (
				<h1 style={{ textAlign: "center", color: "green" }}>Your Items</h1>
			)}

			{dishContext.userIngredients.map((ingredient) => {
				return <Ingredient ingredient={ingredient} />;
			})}
		</div>
	);
};

export default UserIngredients;
