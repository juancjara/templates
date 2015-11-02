var static = require('node-static');
var http = require('http');
var file = new static.Server('./public');
var port = 1234;
var app = http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(port);

console.log('listenning on ' + port);
