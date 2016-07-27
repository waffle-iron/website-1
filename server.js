var http = require( 'http' );
var express = require( 'express' );
var path = require( 'path' );
var favicon = require ( 'serve-favicon' );

var server = express();

server
.use(
    favicon(
        path
        .join( 
            __dirname,
            'client',
            'assets',
            'img',
            'logo.ico')
    )
);


server
.use(
    '/assets', 
    express
    .static(
        path
        .join( 
            __dirname, 
            'client/assets' 
        ) 
    ) 
);

server
.get(
    '/', 
    function(req, res) {
        res
        .sendfile(
            'client/index.html'
        );
    }
);

server
.listen(
    process
    .env
    .PORT || 3000, 
    process
    .env
    .IP || "0.0.0.0", 
    function(){
        //nothing
    }
);