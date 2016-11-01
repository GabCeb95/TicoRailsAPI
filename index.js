/*
* API TicoRails
*/

var express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	dbURL = 'mongodb://ticorailsdbo:root12345@ds041506.mlab.com:41506/ticorailsdb',
	bodyParser = require('body-parser'),
	ticoRailsRouter = require('./routes/ticorails.route.js'),
	scheduler = require('./scheduler/news.scheduler');

app.set('port', (process.env.PORT || 5000));

mongoose.connect(dbURL);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

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



