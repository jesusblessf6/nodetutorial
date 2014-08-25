process.stdin.on('data', function(chunk){
	for(var i = 0 ; i < chunk.length; i ++){
		//console.log(chunk[i]);
		if(chunk[i] == 46){
			chunk.write("!", i, 1);
		}
	}
	console.log(chunk);
});
//process.stdin.resume();