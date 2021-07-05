import React from "react";
import UserCart from "./containers/UserCart/UserCart";
import { Route, Switch } from "react-router-dom";
import IngredientState from "./context/IngredientState";
import "./App.css";
import HomePage from "./containers/HomePage/HomePage";

const App = () => {
	return (
		<IngredientState>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/userCart" exact component={UserCart} />
			</Switch>
		</IngredientState>
	);
};

export default App;
