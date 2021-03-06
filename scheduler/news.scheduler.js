
var CronJob = require('cron').CronJob;
var rss = require('./libs/rss');
var ctrlNews = require('../controllers/news.controller.js');


var job = new CronJob('0 */15 * * * *', function() { // Updating news every 35 minutes
    console.log('Init \n');
    rss.read('http://www.nacion.com/rss/latest/?contentType=NWS',function(result){
      try {
        ctrlNews.createNewsItem(result);
      } catch (error) {
        console.log(error);
      }
    });
  }, function () {
    console.log('End \n');
  },
  true // Start the job right now 
  //timeZone // Time zone of this job. 
);
