var crypto = require('crypto');
var tar = require('tar');
var stream = crypto.createDecipher(process.argv[2], process.argv[3]);
var unzip = require('zlib').createGunzip();
var tar = require('tar');
var fs = require('fs');
var through = require('through');


var parser = tar.Parse();
parser.on('entry', function(e){
	if(e.type === 'File'){
		//console.log(e.path);
		var p = e.path;
		e.pipe(crypto.createHash('md5', {encoding: 'hex'})).pipe(through(function write(data){
			console.log(data.toString() + " " + p );
			//this.queue(data.toString()+ " " + p + '\n');
		}, function end(){this.queue(null);}));
	}
});

process.stdin.pipe(stream).pipe(unzip).pipe(parser);