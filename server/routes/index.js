'use strict';

var express     = require( 'express' );
var router      = express.Router();
var favicon     = require ( 'serve-favicon' );
var path        = require( 'path' );


/*****************************************************************
    Handle favicon requests
*/

router
.use(
    favicon(
        path
        .join( 
            __dirname,
            '..',
            '..',
            'client',
            'assets',
            'img',
            'logo.ico')
    )
);


/*****************************************************************
    Handle static asset requests
*/

router
.use(
    '/assets', 
    express
    .static(
        path
        .join( 
            __dirname,
            '..',
            '..',
            'client',
            'assets' 
        )
    )
);


/*****************************************************************
    Handle contact form requests
*/

router
.use(
    '/contact', 
    require(
        './contact'
    )
);


/*****************************************************************
    Handle initial page visit requests
*/

router
.get(
    '/', 
    function(req, res) {
        res
        .sendFile(
            path
            .join( 
                __dirname,
                '..',
                '..',
                'client',
                'index.html' 
            )
        );
    }
);

module
.exports = router;