function loadUsers(userIds, load, done) {
  var users = [];
  var count = 0;
  // for (var i = 0; i < userIds.length; i++) {
  //   users.push(load(userIds[i]));
  // }
  // return users;
  userIds.forEach(function(userid, index){
  	load(userid, function(user){
  		users[index] = user;
  		count ++;
  		if(count === userIds.length){
  			return done(users);
  		}
  	});
  	
  });
}

module.exports = loadUsers;