/*
* Train Controller
*/
require('../models/train.model.js');
var mongoose = require('mongoose'),
    Train = mongoose.model('Train');

module.exports.listAll = function listAll(req, res) {
    Train.find().exec(function (err, data) {
        res.status(200).json(data);
    });
};

module.exports.listById = function listById(req, res) {
    if (req.params && req.params.id) {
        Train.findById(req.params.id).exec(function (err, train) {
            if (!train) {
                res.status(404).json({ message: 'Train not found' });
                return;
            } else {
                if (err) {
                    res.status(404).json({ error: err });
                    return;
                } else {
                    res.status(200).json(train);
                    return;
                }
            }
        });
    } else {
        res.status(404).json({ message: 'No id in request' });
    }
};