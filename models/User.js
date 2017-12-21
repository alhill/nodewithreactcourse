const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; (equivalent)

const userSchema = new Schema({
	googleId: String,
	isAdmin: { type: Boolean, default: false },
	name: String,
	email: String
});
//
mongoose.model('users', userSchema);