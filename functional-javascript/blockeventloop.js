function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return;
  operation();

  if(num % 10 === 0){
  	return setTimeout(function(){
  		repeat(operation, --num);
  	});
  }else{
  	return repeat(operation, --num);
  }
  
}

module.exports = repeat;