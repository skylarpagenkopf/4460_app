var express = require('express');
var router = express.Router();
var twilio = require('../twilioToFly');

// connect to db to get info for page rendering
//var mongo = require('mongodb');
//var mongoose = require('mongoose');
//var ObjectID = mongo.ObjectID;
//var db;

// connects to db, replace first param with local db for testing
// mongo.MongoClient.connect('mongodb://skylar:skylar@ds031792.mongolab.com:31792/heroku_app36473367', function(err, database) {
// 	if (err) throw err;
// 	db = database;
// });

// get home page
router.get('/', function(req, res) {
	res.render('index', { title: 'Home'});
});


router.get('/dashboard', function(req, res) {
	var data = require('../public/mockdata/dashboard.json');
	res.render('dashboard', {
		title: 'Dashboard',
		data: data,
		user_id: '00',
		user_picture: 'http://www.nerdist.com/wp-content/uploads/2011/01/tenth-doctor.jpg'
	});
});

router.post('/message', function(req, res){
	twilio.receiveUserMessage(req, res);
});

router.post('/reply', function(req, res){
	twilio.replyToUser(req, res);
});

// send message
router.post('/dashboard', function(req, res) {
	// var message = "test",
	//  senior_number = "+12104409806";
	// var messagesFlyRef = require('flybase').init(appname, 'messages', api_key);
	// messagesFlyRef.set({from:"+18302667208", to: senior_number, body: message,time: getTime()});
	// console.log(getTime());
	// client.messages.create({ 
	// 	to: senior_number, 
	// 	from: "+18302667208", 
	// 	body: message,   
	// }, function(err, message) { 
	// 	console.log(message.sid); 
	// });
});

router.get('/account', function(req, res) {
	// get list of seniors they talk to
	// get tasks they are participating on
	// send to account template
	var data = require('../public/mockdata/account.json');
	res.render('account', { 
		title: 'Account', 
		data: data,
		user_id: "00"
	});
});

router.get('/lookup', function(req, res) {
	res.render('lookup', { title: 'Lookup'});
});

router.post('/lookup', function(req, res) {
	// check if query matches a user profile
		// redirect to user profile

	// check if query matches task information
		// aggregate task data
		// send to dashboard template
	res.render('lookup', { title: 'Lookup' });
});

router.get('/lookup/:account_id', function(req, res) {
	// get account profile
	var data = require('../public/mockdata/lookup.json');
	res.render('lookup_dashboard', { 
		title: 'Lookup', 
		data: data,
		user_id: "00"
	});
});

router.get('/signout', function(req, res) {
	// sign user out before redirect
	res.redirect('/');
});

module.exports = router;
