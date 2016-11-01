/*
* Route Controller
*/
require('../models/route.model.js');
var mongoose = require('mongoose'),
    Route = mongoose.model('Route');

module.exports.listAll = function listAll(req, res) {
    Route.find().exec(function (err, data) {
        res.status(200).json(data);
    });
};

module.exports.listById = function listById(req, res) {
    if (req.params && req.params.id) {
        Route.findById(req.params.id).exec(function (err, route) {
            if (!route) {
                res.status(404).json({ message: 'Route not found' });
                return;
            } else {
                if (err) {
                    res.status(404).json({ error: err });
                    return;
                } else {
                    res.status(200).json(route);
                    return;
                }
            }
        });
    } else {
        res.status(404).json({ message: 'No id in request' });
    }
};