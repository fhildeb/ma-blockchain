var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./"))); // Serve static files from the current directory

app.listen(3000); // Port
app.get("/", function (req, res) {
  console.log("Listening to Port 3000");
  res.sendFile(path.join(__dirname, "./", "dApp_Transaction.html")); // Adjust the path if necessary
});