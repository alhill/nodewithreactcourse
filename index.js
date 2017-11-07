const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app); //First set of parenthesis call the function, second set of parenthesis are the arguments of the function

const PORT = process.env.PORT || 5000;
app.listen( PORT );
