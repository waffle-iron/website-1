'use strict';

var nodemailer  = require('nodemailer');
var transporter;
 
function init(){
    transporter = (
        nodemailer
        .createTransport( 'smtps://cleancode.solutions@gmail.com:P@ssw0rd1!@smtp.gmail.com' )
    );
}

function send( options, callback ){

    transporter
    .sendMail(
        options, 
        callback
    );
}

init();

module
.exports = (
    {
        send :
            send
    }
);