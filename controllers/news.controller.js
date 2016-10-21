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

module.exports.createNewsItem = function FeedNews(req,res) {
    
    mongoose.connection.collections['news'].drop( function(err) {// cleaning news collection
        console.log('news dropped');
    });

    for(var i=0; i<req.length; i++){

        console.log('\nStarted ****\n');
        var newsItem = new News();

        newsItem.title = req[i].title
        newsItem.date = req[i].date
        newsItem.text = req[i].text
        newsItem.source = req[i].source

        console.log('Created ****\n');

        newsItem.save(function(err){
            /*if(err){
			    res.status(404).json({error:err});
		    }else{
			    res.status(201).json(newsItem);
		    }*/
        });
        console.log('Saved ****\n');
    }
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