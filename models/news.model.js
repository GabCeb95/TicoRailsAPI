/*
* News Model
*/

var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
	title:{type:String,require: true},
	date: String,
	text: String,
	source: String
},{collection:'news'});

var News = mongoose.model('News',newsSchema);

module.exports = News;