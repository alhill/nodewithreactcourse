const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin'); 
const requireAdmin = require('../middlewares/requireAdmin'); 
const Survey = mongoose.model('surveys');

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
	
	app.get('/api/list_surveys', requireLogin, (req, res) => {
		Survey.find({}, (err, surveys) => {
			res.send( surveys );
		});
	});
}
		

