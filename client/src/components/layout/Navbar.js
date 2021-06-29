import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<h3 style={{ marginLeft: "3rem" }}>Hotel Website</h3>
			<button className="addCartBtn">Add to Cart</button>
		</div>
	);
};

export default Navbar;
