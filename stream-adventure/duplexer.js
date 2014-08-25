var spawn = require('child_process').spawn;
var duplex = require('duplexer');



 module.exports = function(cmd, args){
 	//console.log(cmd);
	//console.log(args);
 	var c = spawn(cmd, args);
 	return duplex(c.stdin, c.stdout);
 };