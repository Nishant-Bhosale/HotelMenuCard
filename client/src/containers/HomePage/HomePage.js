import React, { Fragment } from "react";
import Navbar from "../../components/layout/Navbar";
import CategoryButtons from "../../components/CategoryButtons/CategoryButtons";
import IngredientContainer from "../../components/IngredientContainer/IngredientContainer";
import "./HomePage.css";

const HomePage = () => {
	return (
		<Fragment>
			<Navbar />
			{/* <img
				style={{ height: "700px", width: "100%", margin: "0" }}
				src="https://images.pexels.com/photos/1045199/pexels-photo-1045199.jpeg?cs=srgb&dl=pexels-cassiano-psomas-1045199.jpg&fm=jpg"
				alt=""
			/> */}
			<div className="background-image" />
			<CategoryButtons />
			<IngredientContainer />
		</Fragment>
	);
};

export default HomePage;
