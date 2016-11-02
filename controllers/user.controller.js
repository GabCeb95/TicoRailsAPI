/*
* User Controller
*/
require('../models/user.model.js');
var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports.listAll = function listAll(req, res) {
    User.find().exec(function (err, data) {
        res.status(200).json(data);
    });
};

module.exports.listById = function listById(req, res) {
    if (req.params && req.params.id) {
        User.findById(req.params.id).exec(function (err, user) {
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            } else {
                if (err) {
                    res.status(404).json({ error: err });
                    return;
                } else {
                    res.status(200).json(user);
                    return;
                }
            }
        });
    } else {
        res.status(404).json({ message: 'No id in request' });
    }
};


module.exports.createUser = function createUser(req, res) {
    var user = new User();

    user.user = req.body.user;
    user.password = req.body.password;
    user.name = req.body.name;


    user.save(function (err) {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(201).json(user);
        }

    });
}

module.exports.isUserValid = function isUserValid(req, res) {
    if (req.params && req.params.user && req.params.pass) {
        User.findOne({ user: req.params.user, password: req.params.pass }).exec(function (err, user) {
            if (!user) {
                res.status(404).json({ error: 'Usuario o contraseña incorrectos' });
                return;
            } else {
                if (err) {
                    res.status(404).json({ error: err });
                    return;
                } else {
                    res.status(200).json(user);
                    return;
                }
            }
        })
    }
}