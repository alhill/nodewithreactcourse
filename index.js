const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser')
require('./models/user');
require('./models/Survey');
require('./services/passport');
//
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 5000;
app.listen( PORT );

require('./routes/authRoutes')(app); //First set of parenthesis call the function, second set of parenthesis are the arguments of the function
require('./routes/surveyRoutes')(app);

