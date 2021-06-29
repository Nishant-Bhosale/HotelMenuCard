import React from "react";
import Navbar from "./components/layout/Navbar";
import IngredientState from "./context/IngredientState";
import IngredientContainer from "./components/IngredientContainer/IngredientContainer";
import "./App.css";

const App = () => {
	return (
		<IngredientState>
			<Navbar />
			<IngredientContainer />
		</IngredientState>
	);
};

export default App;
