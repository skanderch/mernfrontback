// 1 - require express
const express = require("express");

// 2 - create instance
const app = express();

// 5 - require dotenv
require("dotenv").config();

// 6 - connectDB
const connectDB = require("./config/connectDB");
connectDB();

// 7 Routing
// middleware global
app.use(express.json());

// middleware route
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));

// 3 - PORT
const PORT = process.env.PORT;

// 4 - create server
app.listen(PORT, (err) => {
	err ? console.err(err) : console.log(`Server running on port ${PORT} ...`);
});
