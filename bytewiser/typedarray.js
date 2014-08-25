process.stdin.once('data', function(chunk){
	var ua = new Uint8Array(chunk);
	console.log(JSON.stringify(ua));
});