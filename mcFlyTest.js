var api_key = "baad4775-71b7-41ef-ad89-090c48e3956e";
var appname = "sofia";
var usersRef = require('flybase').init(appname, 'user', api_key);
var messagesRef = require('flybase').init(appname, 'messages', api_key);
var convoRef = require('flybase').init(appname, 'conversations', api_key);

var getUsers = function(){
		var d = new Date();
		var date = d.toLocaleString();

		usersRef.where({'_id': '5667431989221doc286352926'}).on('value', function(snapshot) {
			var userId = snapshot.raw[0]._id;
			console.log('ID: ' + userId);
			convoRef.where({'senior_id': userId}).on('value', function(convoData){
				var conversation = convoData.raw[0]._id;
				console.log(conversation);
				messagesRef.set({
					body: 'TTTTTTEEEEEEEESSSSSSSSTTTTTTTT',
					conversation_id: conversation,
					sender_id: userId,
					time: date
				});
			});
		});
}();