
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





app.post('/schedule', function(request, response) {
	response.send("{test: test}");
});


app.listen(process.env.PORT || 3000);
