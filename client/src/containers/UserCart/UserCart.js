import React, { useContext } from "react";
import Navbar from "../../components/layout/Navbar";
import ingredientContext from "../../context/IngredientContext";
import UserIngredients from "../../components/UserIngredients/UserIngredients";
import "./UserCart.css";

const UserCart = () => {
	const dishContext = useContext(ingredientContext);
	return (
		<div>
			<Navbar />
			<UserIngredients />
			{dishContext.userIngredients.length <= 0 ? null : (
				<button id="checkout-btn">Send Message</button>
			)}
		</div>
	);
};

export default UserCart;
