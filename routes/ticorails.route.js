/*
* TicoRails Router
*/

var express = require('express'),
	router = express.Router(),
	ctrlNews = require('../controllers/news.controller.js'),
	ctrlStation = require('../controllers/station.controller.js'),
	ctrlTrain = require('../controllers/train.controller.js'),
	ctrlUser = require('../controllers/user.controller.js'),
	rss = require('../scheduler/libs/rss');/*
	usuarioCtrl = require('../controllers/usuario.controller.js');*/

// NEWS ROUTES

router.get('/news',ctrlNews.listAll);

router.get('/updateNews', function(req, res, next) { // If we want to update the latest news manually
  rss.read('http://www.nacion.com/rss/latest/?contentType=NWS',function(result){
    ctrlNews.createNewsItem(result,res);
	res.status(201).json(result);
  })}
);

router.get('/station/',ctrlStation.listAll);

router.get('/station/:id',ctrlStation.listById);

router.get('/train/',ctrlTrain.listAll);

router.get('/train/:id',ctrlTrain.listById);

router.get('/user/:id',ctrlUser.listById);

router.get('/user/:user/:pass',ctrlUser.isUserValid);

router.post('/user/',ctrlUser.createUser);

module.exports = router;
