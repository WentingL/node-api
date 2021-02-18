var express = require("express");
var fs = require("fs");
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res){
	// res.sendFile takes an absolute path to the file
	/*
	res.sendFile(__dirname + '\\index.html', function(err) {
		if (err) {
			console.error(err)
			res.status(500).send(err);
		}
	})
	*/
	
	// another way with fs
	fs.readFile('index.html', function(err, buffer){
		var html = buffer.toString();
		
		res.setHeader('Content-Type', 'text/html');
		res.send(html);
	})
});

app.get('/data', function(req, res){
	res.json(jsonData);
});

var port = 2000;
app.listen(port, function(){
	console.log('listening on http:\\\localhost:', port);
});