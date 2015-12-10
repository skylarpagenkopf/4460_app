var api_key = "baad4775-71b7-41ef-ad89-090c48e3956e";
var appname = "sofia";
var usersRef = require('flybase').init(appname, 'user', api_key);
var messagesRef = require('flybase').init(appname, 'messages', api_key);

var getUsers = function(){
		usersRef.where({'_id': '566740b102b50doc1377109252'}).on('value', function(snapshot) {
		console.log(snapshot.raw[0].name);
		console.log(snapshot.raw[0].picture);
		console.log(snapshot.raw[0].phone_number);
		console.log(snapshot.raw[0].personal_info);
	});
}();