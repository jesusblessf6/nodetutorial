var combiner = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');
var gzip = zlib.createGzip();

module.exports = function(){
	var genres = [];
	return combiner(
		split(), 
		through(
			function write(data){
				//console.log(data);
				var d = null;
				if(data){
					var d = JSON.parse(data);
				}
				
				if(d){
					if(d.type === 'genre'){
						genres.push({"name":d.name, "books":[]});
					}
					else if(d.type === 'book'){
						genres[genres.length-1].books.push(d.name);
					}
				}
			},
			function end(){
				var x = [];
				for(var i = 0; i < genres.length; i ++){
					x.push(JSON.stringify(genres[i]));
				}
				this.queue(x.join('\n') + "\n");
				this.queue(null);
				//console.log(x.join('\n'));
			}
		),
		gzip
	);
};