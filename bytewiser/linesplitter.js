var fs = require('fs');
var start = 0;
var end = 0;
var data;
fs.createReadStream(process.argv[2]).on('data', function(chunk){
	//console.log(chunk);
	data = chunk;
	for (var i = 0 ; i < chunk.length; i ++){
		if(chunk[i] === 10){
			//end = i-1;
			console.log(chunk.slice(start, i));
			i ++;
			start = i;
		}
	}
}).on('end', function(){
	console.log(data.slice(start, data.length-1));
});
