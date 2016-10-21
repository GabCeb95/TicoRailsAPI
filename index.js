/*
* API TicoRails
*/

var express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	dbURL = 'mongodb://ticorailsdbo:root12345@ds041506.mlab.com:41506/ticorailsdb',
	bodyParser = require('body-parser'),
	ticoRailsRouter = require('./routes/ticorails.route.js');

app.set('port', (process.env.PORT || 3100));

mongoose.connect(dbURL);

//logger middleware
app.use(logger('short'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

app.use('/api',ticoRailsRouter);

app.use(function(req,res) {
	res.status(404)
	   .send('The resource '+req.url+' does not exists...');
});

//res.render()
app.listen(app.get('port'),function(){
	console.log('Server running on port '+app.get('port'));
});



