var http = require('http');
var map = require('through2-map');

http.createServer(function(req, res){
	res.writeHead(200, {'content-type':'text/plain'});
	if(req.method === "POST"){
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
}).listen(Number(process.argv[2]));