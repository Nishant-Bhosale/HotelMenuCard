const connectDB = require("./config/db");
const Dish = require("./models/Dish");
const mongoose = require("mongoose");
const express = require("express");
const open = require("open");
const app = express();

app.use(express.json({ extended: false }));

const port = process.env.PORT || 5000;

connectDB();

app.get("/home", (req, res) => {
	res.send("Hello There");
});

app.get("/dishes", async (req, res) => {
	try {
		const dishes = await Dish.find({});

		res.status(200).json({ dishes });
	} catch (e) {
		console.log(e);
		res.status(500).json({ err: "Something went wrong" });
	}
});

app.post("/add-dishes", async (req, res) => {
	const { name, desc, category, imageLink, price } = req.body;

	try {
		const dish = await Dish.findOne({ name });

		if (dish) {
			return res.status(400).json({ message: "Dish already exists." });
		}

		const newDish = new Dish({ name, desc, category, image: imageLink, price });

		await newDish.save();

		res.status(201).json(newDish);
	} catch (e) {
		console.log(e);
		res.status(500).json({ err: "Something went wrong" });
	}
});

app.delete("/dishes/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const dish = await Dish.findByIdAndDelete(id);

		if (!dish) {
			return res.status(404).json({ message: "Dish not found." });
		}

		await dish.remove();
		res.json({ message: "Deleted Successfully" });
	} catch (e) {
		console.log(e);
		res.status(500).json({ err: "Something went wrong" });
	}
});

app.post("/send-info", (req, res) => {
	const { name, email, phone, address } = req.body;
	let userInfo = `Name: ${name} \n 
	Email: ${email} \n
	Phone-Number: ${phone} \n
	Address: ${address} \n
	OrderInfo: \n`;

	console.log(userInfo);

	req.body.ings.forEach((ing) => {
		userInfo += ` ${ing.name}: ${ing.price}  \n`;
	});

	console.log(userInfo);

	const owner = "+917058528287";
	const url = `https://api.callmebot.com/whatsapp.php?phone=${owner}&text=${userInfo}&apikey=629767`;

	open(url, (error) => {
		return console.log(error);
	});
});

app.listen(port);
