let express = require('express');
let Movie = require('./model').Movie;
let app = express();
let path = require('path');
app.use(express.static(path.resolve('node_modules')));
app.set('view engine','ejs');
// set view engine views  engine
app.get('/',function(req,res){
    Movie.find({},function(err,movies){
        res.render('index',{movies});
    });
});

app.listen(80);

let start = require('./tasks/main').start;
let CronJob = require('cron').CronJob;
let job = new CronJob('0 */30 * * * *',start);
job.start();