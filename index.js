/*
* API Moviles
*/

var express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	dbURL = 'mongodb://jose:root@ds019633.mlab.com:19633/earthquakes',
	bodyParser = require('body-parser'),
	terremotosRouter = require('./routes/earthquakes.route.js');

app.set('port', (process.env.PORT || 5000));

mongoose.connect(dbURL);

//logger middleware
app.use(logger('short'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

app.use('/api',terremotosRouter);

app.use(function(req,res) {
	res.status(404)
	   .send('The resource '+req.url+' does not exists...');
});

//res.render()
app.listen(app.get('port'),function(){
	console.log('Server running on port '+app.get('port'));
});



