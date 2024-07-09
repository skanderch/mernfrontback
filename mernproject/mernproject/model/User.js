// 1 - require mongoose
const mongoose = require("mongoose");

// schema
const { Schema, model } = mongoose;

// create schema
const UserSchema = new Schema({
	name: { type: String, require: true },
	email: { type: String, require: true },
	password: { type: String, require: true },
	phone: Number,
});

// export
module.exports = User = model("user", UserSchema);
