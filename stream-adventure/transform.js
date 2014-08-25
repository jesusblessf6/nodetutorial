var through = require('through');

process.stdin.pipe(through(function(data){
	this.queue(data.toString().toUpperCase());
}, function(data){
	this.queue(null);
})).pipe(process.stdout);