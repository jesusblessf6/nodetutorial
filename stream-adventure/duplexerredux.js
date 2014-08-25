//var spawn = require('child_process').spawn;
var duplex = require('duplexer');
var through = require('through');
var split = require('split');

module.exports = function(counter){
	var cc = {};
	return duplex(through(function(data){
		if(!cc[data.country]){
			cc[data.country] = 1;
		}else{
			cc[data.country] +=1;
		}
	}, function end (){
		counter.setCounts(cc);
		//this.queue(null);
		//console.log(cc.length);
	}), counter);
};


