var bytes = [];
for(var i = 2; i < process.argv.length; i ++){
	bytes.push(Number(process.argv[i]));
	//console.log(process.argv[i]);
}

var b = new Buffer(bytes);

console.log(b.toString('hex'));
