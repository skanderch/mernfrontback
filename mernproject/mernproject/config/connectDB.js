// 1 - require mongoose
const mongoose = require("mongoose");

// 2 = createn DB
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URI);
		console.log("Database connected ..");
	} catch (error) {
		console.log(` Can not connected !!! ${error}`);
	}
};
// export
module.exports = connectDB;
