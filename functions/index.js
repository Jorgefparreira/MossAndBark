const admin = require('firebase-admin');
const functions = require('firebase-functions');
const contactMailer = require('./contactMailer.js');

admin.initializeApp();


exports.contactMailer = functions.https.onRequest((req, res) => {
  contactMailer.handler(req, res);
});