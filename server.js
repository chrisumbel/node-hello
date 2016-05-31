var express = require("express");


console.log('starting');

var app = express();

app.get("/", function(req, res) { 
			res.contentType("text/html");
			res.end('<h1>Hello, world.</h1>');
    });

app.listen(process.env.PORT || 8080, "0.0.0.0");
