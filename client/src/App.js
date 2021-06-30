import React from "react";
import Navbar from "./components/layout/Navbar";
import IngredientState from "./context/IngredientState";
import CategoryButtons from "./components/CategoryButtons/CategoryButtons";
import IngredientContainer from "./components/IngredientContainer/IngredientContainer";
import "./App.css";

const App = () => {
	return (
		<IngredientState>
			<Navbar />
			<CategoryButtons />
			<IngredientContainer />
		</IngredientState>
	);
};

export default App;
