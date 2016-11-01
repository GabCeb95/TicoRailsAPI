/*
* Train Model
*/

var mongoose = require('mongoose');

var trainSchema = mongoose.Schema({ //Missing data schema
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
},{collection:'train'});

var Train = mongoose.model('Train',trainSchema);

module.exports = Train;