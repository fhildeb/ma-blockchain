var express = require("express");
var path    = require("path");
var app     = express();

app.listen(3000); // Port
app.get('/', function(req, res){
    console.log("Listening to Port 3000");
    res.sendFile(path.join(__dirname, './','Aufgabe_2_Dapp_adding.html')); //Pfad ggf. anpassen
});
