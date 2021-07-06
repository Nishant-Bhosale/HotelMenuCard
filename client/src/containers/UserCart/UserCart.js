import React, { useContext, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import ingredientContext from "../../context/IngredientContext";
import UserIngredients from "../../components/UserIngredients/UserIngredients";
import Modal from "../../components/Modal/Modal";
import "./UserCart.css";

const UserCart = () => {
	const dishContext = useContext(ingredientContext);
	const [showModal, setShowModal] = useState(false);
	const [showBackdrop, setShowBackdrop] = useState(true);

	const toggleModal = () => {
		setShowModal(true);
		setShowBackdrop(true);
	};

	const toggleBackdrop = () => {
		setShowBackdrop(false);
		setShowModal(false);
	};

	return (
		<div>
			<Navbar />
			<UserIngredients />
			{dishContext.userIngredients.length <= 0 ? null : (
				<button id="checkout-btn" onClick={toggleModal}>
					Send Message
				</button>
			)}
			{showModal ? (
				<Modal showBackdrop={showBackdrop} clicked={toggleBackdrop}>
					Hello EveryOne
				</Modal>
			) : null}
		</div>
	);
};

export default UserCart;
