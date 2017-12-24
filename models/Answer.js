const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
	date: Date,
	answer: [ Number ],
	rating: Number,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});
//
mongoose.model('answers', answerSchema);

module.exports = answerSchema;