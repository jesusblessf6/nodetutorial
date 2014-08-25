var split = require('split');
var through = require('through');

var i = 0;
var tr = through(function write(data){
	if(i % 2 == 0){
		this.queue(data.toString().toLowerCase() + '\n');
	}else{
		this.queue(data.toString().toUpperCase() + '\n');
	}
	i++;
});


process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);


// .on('data', function(data){
// 	var index = i;
// 	if(index % 2 == 0){
// 		//console.log(i);
// 		console.log(data.toString().toLowerCase());
// 	}else{
// 		//console.log(i);
// 		console.log(data.toString().toUpperCase());
// 	}
// 	i++;
// });