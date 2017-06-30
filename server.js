var express = require('express');
var app = express();
var middleware = require("./middleware.js");
var PORT = 3000;

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send("About Us!");
});

//__dirname is the full path until web-server
app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
    console.log("Express server started on port " + PORT + "!");
});
