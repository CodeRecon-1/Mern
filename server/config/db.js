const mongoose = require("mongoose");

const connectDB = async() => {
 	try {
		await mongoose.connect("mongodb://localhost:27017/faqdb");
		console.log("Mongo db connected ");
	} catch(error) {
		console.log(error);
		process.exit(1);
		}
};

module.exports = connectDB
