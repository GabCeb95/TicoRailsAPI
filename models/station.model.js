/*
* Station Model
*/

var mongoose = require('mongoose');

var stationSchema = mongoose.Schema({ //Missing data schema
	_id:{type:Number,require:true,unique:true},
	name:{type:String,require: true},
	lat: Number,
	lng: Number
},{collection:'station'});

var Station = mongoose.model('Station',stationSchema);

module.exports = Station;