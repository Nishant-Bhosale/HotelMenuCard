import React, { useState, useEffect } from "react";
import "./Ingredient.css";

const Ingredient = (props) => {
	const [size, setSize] = useState({
		pizzaSize: "medium",
	});

	const { pizzaSize } = size;
	const { name, price, category } = props.ingredient;

	// useEffect(() => {
	// 	onChange();
	// }, [pizzaSize]);

	const onChange = (e) => {
		setSize({
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="ingredient">
			<div className="ingredient-image">
				<img
					style={{ height: "210px", width: "100px" }}
					src={props.ingredient.image ? props.ingredient.image : null}
				/>
			</div>
			<div className="ingredient-info">
				<p>{name}</p>
				{props.ingredient.desc ? <p>{props.ingredient.desc}</p> : null}
				{typeof price === "object" ? (
					<div>
						<strong>
							Price: {pizzaSize === "medium" ? price.medium : price.large}
						</strong>
						<input
							type="radio"
							value="medium"
							name="pizzaSize"
							checked={pizzaSize === "medium"}
							onChange={onChange}
						/>{" "}
						Medium
						<input
							type="radio"
							value="large"
							name="pizzaSize"
							checked={pizzaSize === "large"}
							onChange={onChange}
						/>{" "}
						Large
					</div>
				) : (
					<strong>Price: {price}</strong>
				)}
			</div>
		</div>
	);
};

export default Ingredient;
