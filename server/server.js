var express = require('express');
var app = express();
var api = require('./api');

// setup the app middlware
require('./middleware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling

// export the app for testing
module.exports = app;
