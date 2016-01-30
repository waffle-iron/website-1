var http = require('http');
var path = require('path');
var express = require('express');

var router = express();
var server = http.createServer(router);

router.get('*', function(req, res) {
    res.sendfile('assets/index.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
});
