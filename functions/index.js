var firebase = require("firebase");
var admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const bodyParser = require('body-parser');
var http = require("http");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

admin.initializeApp(functions.config().firebase);


// POST route from contact form
app.post('/contactus', function (req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: functions.config().mail.id,
      pass: functions.config().mail.key
    }
  });
  var mailOpts = {
    from: `${req.body.email}`,
    to: functions.config().mail.id,
    subject: 'New message from contact form at www.mossandbark.co.uk',
    text: `${req.body.name}, email: ${req.body.email}, phone number ${req.body.phone}, says: ${req.body.message}`
  };
	transporter.sendMail(mailOpts, function(error){
	    if(error){
	        console.log('Error occured');
	        console.log(error.mailOpts);
	        return;
	    }
	    console.log('Message sent successfully!');
	    
	    function mailRedirect() {
			  res.redirect('/');
			}

			setTimeout(mailRedirect, 1000);


	    // if you don't want to use this transport object anymore, uncomment following line
	    transport.close(); // close the connection pool
	});

});

exports.app = functions.https.onRequest(app);
