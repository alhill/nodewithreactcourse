const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); //First set of parenthesis call the function, second set of parenthesis are the arguments of the function

const PORT = process.env.PORT || 5000;
app.listen( PORT );
