/*
* Route Model
*/

var mongoose = require('mongoose');

var routeSchema = mongoose.Schema({ //Missing data schema
	name:{type:String,require: true},
},{collection:'route'});

var Route = mongoose.model('Route',routeSchema);

module.exports = Route;