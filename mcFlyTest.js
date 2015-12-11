var api_key = "baad4775-71b7-41ef-ad89-090c48e3956e";
var appname = "sofia";
var usersRef = require('flybase').init(appname, 'user', api_key);
var messagesRef = require('flybase').init(appname, 'messages', api_key);
var convoRef = require('flybase').init(appname, 'conversations', api_key);
var twilio = require('twilio');
var client = twilio('AC5015a425291500c955445bb60281951c', 'b983d98d0b9b83f7a817d31776226f7f');
var twilio_number = '+18302667208';

// var getUsers = function(){
// 		var d = new Date();
// 		var date = d.toLocaleString();

// 		usersRef.where({'_id': '5667431989221doc286352926'}).on('value', function(snapshot) {
// 			var userId = snapshot.raw[0]._id;
// 			console.log('ID: ' + userId);
// 			convoRef.where({'senior_id': userId}).on('value', function(convoData){
// 				var conversation = convoData.raw[0]._id;
// 				console.log(conversation);
// 				messagesRef.set({
// 					body: 'TTTTTTEEEEEEEESSSSSSSSTTTTTTTT',
// 					conversation_id: conversation,
// 					sender_id: userId,
// 					time: date
// 				});
// 			});
// 		});
// }();

var sendMesssageToUser = function(){
	client.messages.create({ 
	    to: '+16466968952', 
	    from: twilio_number, 
	    body: 'We got married in a fever hotter than a pepper sprout',
	}, function(err, message) { 
		if(err){
			console.log('Fuck'); 
		}
	});
}();