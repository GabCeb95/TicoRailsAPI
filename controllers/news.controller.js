/*
* News Controller
*/
require('../models/news.model.js');
var mongoose = require('mongoose'),
	News = mongoose.model('News');

module.exports.listAll = function listAll(req,res) {
	News.find().exec(function(err,data){
		res.status(200).json(data);
	});
};

/*
module.exports.listById = function listById(req,res) {
	if(req.params && req.params.earthquakeid){
	Earthquake.findById(req.params.earthquakeid).exec(function(err,earthquake){
		if(!earthquake){
			 res.status(404).json({message:'earthquake not found'});
			 return;
		}else{
			if(err){
				 res.status(404).json({error:err});
				 return;
			}else{
				res.status(200).json(earthquake); 
				return;
			}
		}
	});
}else{
	 res.status(404).json({message:'No id in request'});
}
};

module.exports.createEarthquake = function createearthquake(req,res) {
	
	var earthquake = new Earthquake();
	
	earthquake.magnitud = req.body.magnitud
	earthquake.epicentro = req.body.epicentro

	earthquake.save(function(err){
		if(err){
			res.status(404).json({error:err});
		}else{
			res.status(201).json(earthquake);
		}

	});
};


module.exports.updateEarthquake = function updateearthquake(req,res) {
	var earthquakeid = req.params.earthquakeid;
	if(earthquakeid){

		var earthquake = new Earthquake();
		
		earthquake._id = earthquakeid
		earthquake.magnitud = req.body.magnitud
		earthquake.epicentro = req.body.epicentro


		Earthquake.findOneAndUpdate({_id:earthquakeid},earthquake,function(err,earthquake){
			if(err){
				res.status(404).json({error:err});
			}else{
				res.status(201).json(earthquake);
			}

		});

	}else{
		 res.status(404).json({message:'No id in request'});
	}

};

module.exports.deleteEarthquake = function deleteearthquake(req,res) {
	var earthquakeid = req.params.earthquakeid;
	if(earthquakeid){
	Earthquake.findByIdAndRemove(earthquakeid).exec(function(err,earthquake){
		if(!earthquake){
			 res.status(404).json({message:'earthquake not found'});
			 return;
		}else{
			if(err){
				 res.status(404).json({error:err});
				 return;
			}else{
				res.status(204).json({message:'Succesfully deleted'}); 
				return;
			}
		}
	});
}else{
	 res.status(404).json({message:'No id in request'});
}
};
*/