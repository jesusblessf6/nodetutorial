function reduce (arr, fn, init){
	var result;
	var i;
	if(init){
		result = fn(init, arr[0]);
		i = 1;
	}else{
		result = fn(arr[0], arr[1]);
		i =2;
	}
	var left = arr.slice(i);
	if(left.length <= 0){
		return result;
	}else{
		return reduce(left, fn, result);
	}
}

module.exports = reduce;
