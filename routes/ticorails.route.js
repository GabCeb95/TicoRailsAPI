/*
* TicoRails Router
*/

var express = require('express'),
	router = express.Router(),
	ctrlNews = require('../controllers/news.controller.js');/*
	usuarioCtrl = require('../controllers/usuario.controller.js');*/

// NEWS ROUTES

router.get('/news',ctrlNews.listAll);
/*
router.get('/news/:id',ctrlNews.listById);

router.post('/news/',ctrlNews.createNewsItem);

router.put('/news/:id',ctrlNews.updateNewsItem);

router.delete('/news/:id',ctrlNews.deleteNewsItem);

// USUARIOS ROUTES

router.get('/usuarios',usuarioCtrl.listAll);

router.get('/usuarios/:id',usuarioCtrl.listById);

router.post('/usuarios/',usuarioCtrl.createUsuario);

router.put('/usuarios/:id',usuarioCtrl.updateUsuario);

router.delete('/usuarios/:id',usuarioCtrl.deleteUsuario);

router.get('/login/:id',usuarioCtrl.byUser);*/

module.exports = router;
