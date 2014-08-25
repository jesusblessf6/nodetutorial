module.exports = function(inputWords){
	var o = {};
	return inputWords.reduce(function(previous, current, index, arr){
		//console.log(previous);
		//var o = previous;
		if(!previous[current]){
			previous[current] = 1;
		}else{
			previous[current] ++;
		}
		return previous;
	}, o);
};