var fs = require('fs');
var path = require('path');

function myReadDir (dirName, extName, callback){
	fs.readdir(dirName, function(err, list){
		if(err){
			callback(err);
		}else{
			var result = [];
			for(var i in list){
				if(path.extname(list[i]) === '.'+extName){
					result.push(list[i]);
				}
			}
			callback(err, result);
		}
		
	});
}

module.exports  = myReadDir;