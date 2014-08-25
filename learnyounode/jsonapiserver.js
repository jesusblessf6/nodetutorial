var http = require('http');
var url = require('url');

http.createServer(function(req, res){

	if(req.method !== "GET"){
		res.write('Please send GET request');
	}
	else{
		var pathInfo = url.parse(req.url, true);
		console.log(pathInfo);
		if(pathInfo.pathname === '/api/parsetime'){
			if(pathInfo.query.iso){
				var d = new Date(pathInfo.query.iso);
				res.writeHead(200, {'Content-Type': 'application/json'});
				var result = {
					'hour': d.getHours(),
					'minute': d.getMinutes(),
					'second': d.getSeconds()
				};
				res.write(JSON.stringify(result));
				res.end();
			}
		}else if(pathInfo.pathname === '/api/unixtime'){
			if(pathInfo.query.iso){
				var d = new Date(pathInfo.query.iso);
				res.writeHead(200, {'Content-Type': 'application/json'});
				var result = {
					'unixtime':d.getTime()
				};
				res.write(JSON.stringify(result));
				res.end();
			}
		}
	}

}).listen(Number(process.argv[2]));