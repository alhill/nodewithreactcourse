const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin'); 
const requireAdmin = require('../middlewares/requireAdmin'); 
const Survey = mongoose.model('surveys');
const Answer = mongoose.model('answers');

module.exports = app => {
	app.post('/api/save_survey', requireLogin, requireAdmin, (req, res) => {
		//console.log( "llegue aqui" );
		const question_keyval = Object.entries(req.body);
		const questions_arr = [];
		question_keyval.map( (elem, i) => {
			if( i>1 ){
				questions_arr.push( elem[1] );
			}
		});	
		
		//console.log( res );
		const { title, description, questions, answers } = req.body;
		console.log( questions_arr )
		const survey = new Survey({
			title,
			description,
			answers,
			questions: questions_arr
		}).save();
	});
	
	app.post('/api/save_answer', requireLogin, (req, res) => {
		
		const { answer, user, survey } = req.body;

		const answers_arr = Object.entries(answer).map((elem, i) => {
			return elem[1];
		});

		const sum = answers_arr.reduce( (a,b) => {
			return (parseInt(a)+parseInt(b))
		});
		const rating = sum / (answers_arr.length);

		const newAnswer = new Answer({
			date: Date.now(),
			answer: answers_arr,
			_user: user,
			rating
		})
		
		Survey.findOne(
			{_id:survey}, 
			function(err,doc){	
				//console.log( newAnswer );
				doc.answers.push( newAnswer );   
				doc.save();
			}
		)
	});
			
	app.get('/api/list_surveys', requireLogin, (req, res) => {
		Survey.find({}, (err, surveys) => {
			res.send( surveys );
		});
	});
}
		

