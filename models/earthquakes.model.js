/*
* Earthquake Model
*/

var mongoose = require('mongoose');

var earthquakeSchema = mongoose.Schema({
	magnitud:{type:Number,require: true},
	epicentro: String,
},{collection:'sismo'});

var Earthquake = mongoose.model('Earthquake',earthquakeSchema);

module.exports = Earthquake;