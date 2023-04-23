var express = require("express");
var path = require("path");
var app = express();

app.listen(3000); // Port
app.get("/", function (req, res) {
  console.log("Listening to Port 3000");
  res.sendFile(path.join(__dirname, "./", "dApp_Eth_Info.html")); //TODO: Adjust HTML Path
});
