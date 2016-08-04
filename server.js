'use strict';

var express     = require( 'express' );
var path        = require( 'path' );
var server      = express();
var router      = require( path.resolve( 'server/routes' ) );


/*****************************************************************
    Use router to handle all requests
*/

server
.use(
    '/',
    router
);


/*****************************************************************
    Start server
*/

server
.listen(
    process
    .env
    .PORT || 3000, 
    process
    .env
    .IP || "0.0.0.0", 
    function(){
        console
        .log(
            'Server Started'
        );
    }
);