import React, { useState } from "react";
import "./Ingredient.css";

const Ingredient = (props) => {
	const [size, setSize] = useState({
		pizzaSize: "medium",
	});

	const { pizzaSize } = size;
	const { name, price, category } = props.ingredient;

	const onChange = (e) => {
		setSize({
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="ingredient">
			<div className="ingredient-image">
				<img
					style={{ height: "100%", width: "90%" }}
					src={props.ingredient.image ? props.ingredient.image : null}
					alt=""
				/>
			</div>
			<div className="ingredient-info">
				<p className="ingredient-name">{name}</p>
				{props.ingredient.desc ? (
					<p className="ingredient-desc">{props.ingredient.desc}</p>
				) : null}
				{typeof price === "object" ? (
					<div className="ingredient-price">
						<strong>
							Price: {pizzaSize === "medium" ? price.medium : price.large}
						</strong>
						<div className="ingredient-input">
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
					</div>
				) : (
					<strong>Price: {price}</strong>
				)}
				<button className="add-btn">Add To Cart</button>
			</div>
		</div>
	);
};

export default Ingredient;
