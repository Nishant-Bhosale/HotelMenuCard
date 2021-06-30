import React from "react";

const CategoryButtons = () => {
	const categories = [
		"Pizza",
		"Burger",
		"Sandwich",
		"Momos",
		"Fries",
		"Snacks",
		"Juices",
	];
	return (
		<div className="buttons-container">
			{categories.map((category, index) => {
				return <button id={index}>{category}</button>;
			})}
		</div>
	);
};

export default CategoryButtons;
