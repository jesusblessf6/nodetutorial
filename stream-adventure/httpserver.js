var http = require('http');
var through = require('through');

http.createServer(function(req, res){
	if(req.method === "POST"){
		req.pipe(through(function write(data){
			this.queue(data.toString().toUpperCase());
		})).pipe(res);
	}
}).listen(Number(process.argv[2]));