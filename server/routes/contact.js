'use strict';

var router      = require( 'express' ).Router();
var bodyParser  = require( 'body-parser' );
var mailservice = require( '../services/mail' );

router
.use(
    bodyParser
    .urlencoded(
        { 
            extended: 
                true 
        }
    )
);

router
.post(
    '/submit',
    function( req, res){
        
        var mailOptions = {
            from: 
                req
                .body
                .email, 
            to: 
                'jamesmackay10011@gmail.com', 
            subject:
                '['+req.body.name+(req.body.company? '-'+req.body.company : '' )+'] has sent you a message through cleancode.solutions',
            text: 
                req
                .body
                .message
                + '\n'
                + req.body.email
        };
        
        mailservice
        .send(
            mailOptions,
            function( error, info ){
                if( error ){
                    
                    console
                    .log(error);
                    
                    res
                    .status(500)
                    .send();
                    
                }else{
                    res
                    .status(200)
                    .send();
                }
            }
        );
    }
);

module
.exports = router;