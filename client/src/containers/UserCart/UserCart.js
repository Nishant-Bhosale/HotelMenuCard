import React, { useContext, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import ingredientContext from "../../context/IngredientContext";
import axios from "axios";
import UserIngredients from "../../components/UserIngredients/UserIngredients";
import Modal from "../../components/Modal/Modal";
import "./UserCart.css";

const UserCart = () => {
	const dishContext = useContext(ingredientContext);
	const [showModal, setShowModal] = useState(false);
	const [showBackdrop, setShowBackdrop] = useState(true);
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
	});

	const { name, email, phone, address } = contact;

	const toggleModal = () => {
		setShowModal(true);
		setShowBackdrop(true);
	};

	const toggleBackdrop = () => {
		setShowBackdrop(false);
		setShowModal(false);
	};

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const orderInfo = {
			...contact,
			ings: dishContext.userIngredients,
		};

		axios.post("/send-info", orderInfo, config).then((res) => {
			console.log(res);
		});
	};

	return (
		<div>
			<Navbar />
			<UserIngredients />
			{dishContext.userIngredients.length <= 0 ? null : (
				<button className="checkout-btn" onClick={toggleModal}>
					Send Message
				</button>
			)}
			{showModal ? (
				<Modal showBackdrop={showBackdrop} clicked={toggleBackdrop}>
					<form onSubmit={onSubmitHandler}>
						<h2
							className="text-primary"
							style={{ textAlign: "center", color: "green" }}
						>
							Enter Your Details
						</h2>
						<input
							type="text"
							placeholder="Name"
							value={name}
							name="name"
							onChange={onChange}
							className="input-bar"
						/>
						<input
							type="email"
							placeholder="Email"
							value={email}
							name="email"
							onChange={onChange}
							className="input-bar"
						/>
						<input
							type="text"
							placeholder="Phone"
							value={phone}
							name="phone"
							onChange={onChange}
							className="input-bar"
						/>
						<input
							type="text"
							placeholder="Your Address"
							value={address}
							name="address"
							onChange={onChange}
							className="input-bar"
						/>
						<input
							type="submit"
							value={"Send Message"}
							className="checkout-btn"
						/>
					</form>
				</Modal>
			) : null}
		</div>
	);
};

export default UserCart;
