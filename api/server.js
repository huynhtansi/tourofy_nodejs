var express = require('express');
var app = express();
var fs = require("fs");


var Client = require('node-rest-client').Client;

var client = new Client();

app.get('/listUsers', function (req, res) {

   var songid = {
   		id: "IWZ97CUI"
   };

   var args = {
   		parameters: {requestdata: JSON.stringify(songid)}
   };
   
	client.get("http://api.mp3.zing.vn/api/mobile/song/getsonginfo", args, function(data, response) {
		//console.log(data);
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})