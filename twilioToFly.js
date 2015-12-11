var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var twilio = require('twilio');
var Flybase = require('flybase');
var client = twilio('AC5015a425291500c955445bb60281951c', 'b983d98d0b9b83f7a817d31776226f7f');
var twilio_number = '+18302667208';

var api_key = "baad4775-71b7-41ef-ad89-090c48e3956e";
var appname = "sofia";
var usersRef = require('flybase').init(appname, 'user', api_key);
var convoRef = require('flybase').init(appname, 'conversations', api_key);
var messagesRef = require('flybase').init(appname, 'messages', api_key);

var receiveUserMessage = function(req, res){
	var d = new Date();
	var date = d.toLocaleString();
	var seniorFirstName;

	var number = req.param('From').substring(1);
	console.log(number);

	usersRef.where({'phone_number': number}).on('value', function(data){
		var userId = data.raw[0]._id;
		seniorFirstName = data.raw[0].name.split(' ')[0];
		console.log('Name: ' + data.raw[0].name);
		console.log('FirstName: ' + data.raw[0].name.split(' ')[0]);
		console.log('UserId: ' +  userId);
		convoRef.where({'senior_id': userId, 'status':'open'}).on('value', function(convoData){
			var conversation = convoData.raw[0]._id;
			console.log('ConvoID: ' + conversation);
			messagesRef.push({
				body: req.param('Body'),
				conversation_id: conversation,
				sender_id: userId,
				time: date
			});
			var resp = new twilio.TwimlResponse();
			resp.message("\nHello " + seniorFirstName + "!\nThis is Rebecca!, I got your message and will get back to you shortly.");
			res.writeHead(200, {
				'Content-Type':'text/xml'
			});
			res.end(resp.toString());
		});

	});
};

var replyToUser = function(req, res){
	var d = new Date();
	var date = d.toLocaleString();

	usersRef.where({'_id': req.data.senior_id}).on('value', function(snapshot){
		var userId = snapshot.raw[0]._id;
		var userNumber = '+' + snapshot.raw[0].phone_number;

		convoRef.where({'senior_id': userId, 'status':'open'}).on('value', function(convoData){
			var conversation = convoData.raw[0]._id;
			console.log('ConvoID: ' + conversation);
			messagesRef.push({
				body: req.data.body,
				conversation_id: conversation,
				sender_id: req.data.worker_id,
				time: date
			});

			client.messages.create({ 
			    to: userNumber, 
			    from: twilio_number, 
			    body: req.data.body 
			}, function(err, message) { 
			    if(error){

			    } 
			});
		});

	});
};

router.receiveUserMessage = receiveUserMessage;
router.replyToUser = replyToUser;
module.exports = router;