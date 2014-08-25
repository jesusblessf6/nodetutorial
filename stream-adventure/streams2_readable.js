var through = require('through');
module.exports = Reader;

function Reader(stream){
	return stream.pipe(through(function(data){
		this.queue(data);
	}, function end(){this.queue(null);}));
}