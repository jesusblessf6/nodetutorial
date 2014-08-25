var list = [];

process.stdin.on('data', function(chunk){
	list.push(chunk);
}).on('end', function(){
	var full = Buffer.concat(list);
	console.log(full);
});