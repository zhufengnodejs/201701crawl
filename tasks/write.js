let Movie = require('../model').Movie;
let async = require('async');
exports.write = function(movies,callback){
/*  async.forEach(movies,function(movie,cb){
     Movie.create(movie,cb);
  },callback);*/
    Movie.create(movies,callback);
}
exports.write([{name:'超级大山炮',url:'sanpao'},{name:'白鹿原',url:'bailuyuan'}],function(err){
    console.log(err);
});