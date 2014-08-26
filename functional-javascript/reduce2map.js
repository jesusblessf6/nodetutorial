module.exports = function(arr, fn){
	var result = [];
	arr.reduce(function(previous, current, index, arr){
		result.push(fn(current));
	}, []);
	return result;
}