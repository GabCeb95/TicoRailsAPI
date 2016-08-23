/*
* Earthquakes Router
*/

var express = require('express'),
	router = express.Router(),
	ctrlEarthquake = require('../controllers/earthquakes.controller.js'),
	sismoCtrl = require('../controllers/sismo.controller.js'),
	reporteCtrl = require('../controllers/reporte.controller.js'),
	usuarioCtrl = require('../controllers/usuario.controller.js');
// routes

router.get('/earthquakes',ctrlEarthquake.listAll);

router.get('/earthquakes/:id',ctrlEarthquake.listById);

router.post('/earthquakes/',ctrlEarthquake.createEarthquake);

router.put('/earthquakes/:id',ctrlEarthquake.updateEarthquake);

router.delete('/earthquakes/:id',ctrlEarthquake.deleteEarthquake);


// SISMOS ROUTES

router.get('/sismos',sismoCtrl.listAll);

router.get('/sismos/:id',sismoCtrl.listById);

router.post('/sismos/',sismoCtrl.createSismo);

router.put('/sismos/:id',sismoCtrl.updateSismo);

router.delete('/sismos/:id',sismoCtrl.deleteSismo);

// REPORTES ROUTES

router.get('/reportes',reporteCtrl.listAll);

router.get('/reportes/:id',reporteCtrl.listById);

router.post('/reportes/',reporteCtrl.createReporte);

router.put('/reportes/:id',reporteCtrl.updateReporte);

router.delete('/reportes/:id',reporteCtrl.deleteReporte);


// USUARIOS ROUTES

router.get('/usuarios',usuarioCtrl.listAll);

router.get('/usuarios/:id',usuarioCtrl.listById);

router.post('/usuarios/',usuarioCtrl.createUsuario);

router.put('/usuarios/:id',usuarioCtrl.updateUsuario);

router.delete('/usuarios/:id',usuarioCtrl.deleteUsuario);

router.get('/login/:id',usuarioCtrl.byUser);

module.exports = router;
