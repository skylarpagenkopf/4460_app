var express = require('express');
var router = express.Router();

// connect to db to get info for page rendering
var mongo = require('mongodb');
var mongoose = require('mongoose');
var ObjectID = mongo.ObjectID;
var db;

// connects to db, replace first param with local db for testing
// mongo.MongoClient.connect('mongodb://skylar:skylar@ds031792.mongolab.com:31792/heroku_app36473367', function(err, database) {
// 	if (err) throw err;
// 	db = database;
// });

// get home page
router.get('/', function(req, res) {
	res.render('index', { title: 'Home'});
});

module.exports = router;
