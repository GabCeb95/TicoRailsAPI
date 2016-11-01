/*
* Route Model
*/

var mongoose = require('mongoose');

var routeSchema = mongoose.Schema({ //Missing data schema
	nombre:{type:String,require: true},
	rutas:[{
		nombre:{typre:String},
		horarios:[{
			inicio:{type:Number},
			final:{type:Number},
			hora:{type:Number},
			paradas:[{
				proveniente:{type:Number},
				hora1:{type:Number},
				destino:{type:Number},
				hora2:{type:Number}
			}]
		}]
	}]
},{collection:'route'});

var Route = mongoose.model('Route',routeSchema);

module.exports = Route;