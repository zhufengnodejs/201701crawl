let read = require('./read').read;
let write = require('./write').write;
let async = require('async');
let debug = require('debug')('crawl:main');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let Movie = require('../model').Movie;
function start(){
   async.waterfall([
       function(callback){
        Movie.remove({},callback);
       },
       function(data,callback){
         read(url,callback);//callback(err,movies)
       },
       function(movies,callback){
         write(movies,callback);
       }
   ],function(){
       debug('全部任务完成');
   });
}
exports.start = start;