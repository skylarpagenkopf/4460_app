var router = express.Router();
var methodOverride = require('method-override');
var twilio = require('twilio');
var client = twilio('AC5015a425291500c955445bb60281951c', 'b983d98d0b9b83f7a817d31776226f7f');
var twilio_number = '+18302667208';

var api_key = "baad4775-71b7-41ef-ad89-090c48e3956e";
var appname = "Sofia";
var collection = "messages";
var messagesRef = require('datamcfly').init(appname, collection, api_key);

var receiveUserMessage = function(req, res){
	var d = new Date();
	var date = d.toLocaleString();

	datamcfly.documents('users', { where: {phone_number: request.param('From'), asc['age']}, function(data) {
		console.log(JSON.stringify(data));
	);

	messagesRef.push({
		body:'test',
		conversation_id:'test',
		sender_id:'test',
		time: 'test'
	});

	var resp = new twilio.TwimlResponse();
	resp.message("Got it! Rebecca will get back to you shortly.");
	response.writeHead(200, {
		'Content-Type':'text/xml'
	});
	response.end(resp.toString());
}

router.receiveUserMessage = receiveUserMessage;
module.exports = router;