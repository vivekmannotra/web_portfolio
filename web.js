var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var router = express.Router();
//var Q = require('q');
//var mongoose = require('mongoose');
//var models = require('./dtx_files/dtx_models');
var app = express();
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use('/getEmail', router);
router.post('/', handleEmails); // handle the route at yourdomain.com/sayHello

function handleEmails(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'work.vivekmannotra@gmail.com', // Your email id
            pass: '244409geekology' // Your password
        }
    });
    var mailOptions = {
        from: 'work.vivekmannotra@gmail.com', // sender address
        to: 'vivekmanotra@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: 'Sample Email.' //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
             res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        }
    });
}
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});
app.listen(process.env.PORT || 5000);