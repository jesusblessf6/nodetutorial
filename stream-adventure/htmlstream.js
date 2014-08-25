var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
tr.pipe(process.stdout);



var loud = tr.select('.loud', function(ele){
	var s = ele.createStream();
	s.pipe(through(function write(data){
		this.queue(data.toString().toUpperCase());
	}, function end(){
		this.queue(null);
	})).pipe(s);
});


process.stdin.pipe(tr);



