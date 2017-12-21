const mongoose = require('mongoose');
const { Schema } = mongoose;
const answerSchema = require('./answer');

const surveySchema = new Schema({
	title: String,
	description: String,
	questions: [ String ],
	answers: [ answerSchema ]
});

mongoose.model('surveys', surveySchema);