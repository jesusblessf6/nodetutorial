var http = require('http');
var bl = require('bl');

var count = 0;
var result = [];

// for(var i = 0 ; i < 3; i ++){
// 	var temp = i;
// 	http.get(process.argv[2+temp], function(res){
// 		res.pipe(bl(function(err, data){
// 			if(err){
// 				return console.error(err);
// 			}

// 			result[temp] = data.toString();
// 			console.log(temp + " : " + data.toString());
// 			count ++;
// 			if(count == 3){
// 				for(var j = 0; j < 3; j ++){
// 					console.log(result[j]);
// 				}
// 			}

// 		}));
// 	});
// }

for(var i = 0; i < 3; i ++){
	readUrl(i);
}

function readUrl(index){
	http.get(process.argv[index + 2], function(response){
		response.pipe(bl(function(err, data){
			if(err)
				return console.error(err);

			result[index] = data.toString();
			count ++;

			if(count ==3){
				printResult();
			}
		}));
	});
}

function printResult(){
	for(var i = 0; i < 3; i ++){
		console.log(result[i]);
	}
}
