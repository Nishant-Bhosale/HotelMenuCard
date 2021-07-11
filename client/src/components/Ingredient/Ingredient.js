import React, { useState, useContext } from "react";
import ingredientContext from "../../context/IngredientContext";
import "./Ingredient.css";

const Ingredient = (props) => {
	const dishContext = useContext(ingredientContext);

	const [size, setSize] = useState({
		pizzaSize: "medium",
	});

	const { addIngredients, removeIngredient, changePrice } = dishContext;

	const { pizzaSize } = size;
	const { name, price } = props.ingredient;

	const onChange = (e) => {
		setSize({
			[e.target.name]: e.target.value,
		});
		if (pizzaSize === "medium") {
			changePrice("large", props.ingredient.id);
		} else {
			changePrice("medium", props.ingredient.id);
		}
	};

	const onClickHandler = (ingredient) => {
		addIngredients(ingredient);
	};

	return (
		<div className="ingredient">
			<div className="ingredient-image">
				<img
					// style={{ height: "100%", width: "90%" }}
					className="ingredient-main-image"
					src={props.ingredient.image ? props.ingredient.image : null}
					alt=""
				/>
			</div>
			<div className="ingredient-info">
				<p className="ingredient-name">{name}</p>
				{props.ingredient.desc ? (
					<p className="ingredient-desc">{props.ingredient.desc}</p>
				) : null}
				{props.ingredient.category === "Pizza" && props.addToCart ? (
					<div className="ingredient-price">
						<strong>Price: {pizzaSize === "medium" ? 160 : 310}</strong>
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
				{props.addToCart ? (
					<button
						className="add-btn"
						onClick={() => onClickHandler(props.ingredient)}
					>
						Add To Cart
					</button>
				) : (
					<button
						className="remove-btn"
						onClick={() => removeIngredient(props.ingredient)}
					>
						Remove From Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Ingredient;
