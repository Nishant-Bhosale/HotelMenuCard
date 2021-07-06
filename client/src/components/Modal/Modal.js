import React, { useState } from "react";
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../hocs/Auxiliary/Auxiliary";
import "./Modal.css";

const Modal = (props) => {
	return (
		<Aux>
			<BackDrop show={props.showBackdrop} clicked={props.clicked} />
			<div className="Modal">{props.children}</div>
		</Aux>
	);
};

export default Modal;
