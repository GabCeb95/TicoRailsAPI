/*
* Station Controller
*/
require('../models/station.model.js');
var mongoose = require('mongoose'),
    Station = mongoose.model('Station');

module.exports.listAll = function listAll(req, res) {
    Station.find().exec(function (err, data) {
        res.status(200).json(data);
    });
};

module.exports.listById = function listById(req, res) {
    if (req.params && req.params.id) {
        Station.findById(req.params.id).exec(function (err, station) {
            if (!station) {
                res.status(404).json({ message: 'Station not found' });
                return;
            } else {
                if (err) {
                    res.status(404).json({ error: err });
                    return;
                } else {
                    res.status(200).json(station);
                    return;
                }
            }
        });
    } else {
        res.status(404).json({ message: 'No id in request' });
    }
};