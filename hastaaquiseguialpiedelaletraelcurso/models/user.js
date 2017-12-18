const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; (equivalent)

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);