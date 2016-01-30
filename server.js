var http = require('http');
var express = require('express');
var path = require('path');

var server = express();


server.use('/assets', express.static( path.join( __dirname, 'client/assets' ) ) );
server.use('/application', express.static( path.join( __dirname, 'client/application' ) ) );

server.get('/', function(req, res) {
    res.sendfile('client/index.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
});
