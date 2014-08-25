var http  = require('http');
var fs = require('fs');

var filename = process.argv[3];

http.createServer(function(req, res){
	res.writeHead(200, {'content-type' : 'text/plain'});
	fs.createReadStream(filename).pipe(res);
}).listen(Number(process.argv[2]));