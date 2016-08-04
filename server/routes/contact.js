'use strict';

var router      = require( 'express' ).Router();
var bodyParser  = require( 'body-parser' );

router
.use(
    bodyParser
    .urlencoded()
);

router
.post(
    '/submit',
    function( req, res){
        
        res
        .send(
            req
            .body
        );
    }
);

module
.exports = router;