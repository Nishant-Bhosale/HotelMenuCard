const mongoose = require("mongoose");
const { Schema } = mongoose;

const DishSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	desc: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

const dishSchema = mongoose.model("DishSchema", DishSchema);

module.exports = dishSchema;
