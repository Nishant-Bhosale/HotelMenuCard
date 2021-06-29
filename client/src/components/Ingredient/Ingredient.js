import React from "react";
import "./Ingredient.css";

const Ingredient = (props) => {
	const { name, price, category } = props.ingredient;
	return (
		<div className="ingredient">
			<div className="ingredient-image">empty for now</div>
			<div className="ingredient-info">
				<p>{name}</p>
				{props.ingredient.desc ? <p>{props.ingredient.desc}</p> : null}
				{typeof price === "object" ? null : <strong>Price: {price}</strong>}
			</div>
		</div>
	);
};

export default Ingredient;
