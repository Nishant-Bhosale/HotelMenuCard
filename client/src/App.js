import React, { useContext } from "react";
import Navbar from "./components/layout/Navbar";
// import ingredientContext from "./context/IngredientContext";
import IngredientState from "./context/IngredientState";
import Test from "./components/test";
import "./App.css";
import axios from "axios";

const App = () => {
	return (
		<IngredientState>
			<Navbar />
			<Test />
		</IngredientState>
	);
};

export default App;
