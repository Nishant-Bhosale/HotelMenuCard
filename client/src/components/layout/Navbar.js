import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link style={{ marginLeft: "3rem" }} to="/">
				Hotel Website
			</Link>
			<Link className="addCartBtn" to="/userCart">
				Your Cart
			</Link>
		</div>
	);
};

export default Navbar;
