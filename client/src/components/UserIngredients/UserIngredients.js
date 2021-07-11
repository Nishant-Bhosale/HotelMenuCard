import React, { useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import Ingredient from "../Ingredient/Ingredient";
import "./UserIngredients.css";

const UserIngredients = (props) => {
	const dishContext = useContext(ingredientContext);

	const { userIngredients } = dishContext;
	return (
		<React.Fragment>
			{userIngredients.length <= 0 ? (
				<h1 style={{ textAlign: "center", color: "green" }}>
					No Items found in your Cart
				</h1>
			) : (
				<h1 style={{ textAlign: "center", color: "green" }}>Your Items</h1>
			)}
			<div className="user-ingredients">
				{userIngredients.map((ingredient) => {
					return (
						<Ingredient
							ingredient={ingredient}
							addToCart={false}
							key={ingredient.id}
						/>
					);
				})}
			</div>
			{userIngredients.length > 0 ? (
				<div className="total-price">
					<h3 className="total-price-heading">
						Total Price: {props.totalPrice}
					</h3>
				</div>
			) : null}
		</React.Fragment>
	);
};

export default UserIngredients;
