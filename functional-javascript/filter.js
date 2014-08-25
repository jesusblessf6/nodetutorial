function getShortMessages(messages){
	return messages.filter(function(ele){
		return ele.message.length < 50;
	}).map(function(value){
		return value.message;
	});
}

module.exports = getShortMessages;