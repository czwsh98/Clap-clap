
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:5000/';

const dbName = 'nodemongoapp';

var db = MongoClient.connect(url, function(error, databaseConnection) {
	db = databaseConnection;
});


var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(__dirname + "/public"));


app.post('/moods', function(request, response) {
	if ((request.body.mood == null)){
		response.send("{uri: 'spotify:track:2WfaOiMkCvy7F5fcp2zZ8L'}");
	}
	else{
		db.collection('playlists').find({"mood": request.body.mood}).toArray(function(err, results){
			if (err) {response.send("{uri: 'spotify:track:2WfaOiMkCvy7F5fcp2zZ8L'}")}
			else {
				var temp = {};
				temp.uri = results[0].uri;
				response.send(temp);
			}
		});
	}

});


app.post('/add', function(request, response) {
	var toInsert = {
		"mood": request.body.mood,
		"uri": request.body.uri,
	};
	
	db.collection('playlists').update({mood: request.body.mood}, toInsert, {upsert: true}, function(err, res){
		if (err) {throw err;}
		else{
			response.send("submitted!");
		};
	});

});


app.listen(process.env.PORT || 3000);
