const express = require("express");
const open = require("open");
const app = express();
const port = process.env.PORT || 5000;

app.get("/home", (req, res) => {
	res.send("Hello There");
});

app.get("/send-info", (req, res) => {
	const url =
		"https://api.callmebot.com/whatsapp.php?phone=+917058528287&text=hey+pooja+and+rohan+bhosale&apikey=629767";

	open(url, (error) => {
		return console.log(error);
	});
});

app.listen(port);
