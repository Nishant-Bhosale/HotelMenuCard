const express = require("express");
const open = require("open");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

app.get("/home", (req, res) => {
	res.send("Hello There");
});

app.post("/send-info", (req, res) => {
	console.log(req.body);
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
