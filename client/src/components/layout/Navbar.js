import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link style={{ marginLeft: "2rem" }} className="nav-link" to="/">
				Hotel Website
			</Link>
			<Link className="nav-link" to="/userCart">
				Your Cart
			</Link>
		</div>
	);
};

export default Navbar;
