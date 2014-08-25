var net = require('net');
var port = process.argv[2];
//console.log(port);

var server = net.createServer(function(socket){
	var date = new Date();
	var result = date.getFullYear().toString() + "-" + formatString(date.getMonth()+1) + "-" + formatString(date.getDate()) + " " + formatString(date.getHours()) + ":" + formatString(date.getMinutes()) + "\n";

	socket.end(result);
}).listen(Number(port));

function formatString(i){
	if(i<10){
		return "0" + i;
	}else{
		return i.toString();
	}
}