import React, { Fragment } from "react";
import Navbar from "../../components/layout/Navbar";
import CategoryButtons from "../../components/CategoryButtons/CategoryButtons";
import IngredientContainer from "../../components/IngredientContainer/IngredientContainer";
const HomePage = () => {
	return (
		<Fragment>
			<Navbar />
			<CategoryButtons />
			<IngredientContainer />
		</Fragment>
	);
};

export default HomePage;
