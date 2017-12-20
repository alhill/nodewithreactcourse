const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
	responded: Date,
	answer: [ Number ],
	rating: Number,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = answerSchema;