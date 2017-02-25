var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Q = require('q');
//var mongoose = require('mongoose');
//var models = require('./dtx_files/dtx_models');
var app = express();
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

//Interceptors
function requestInterceptor (req, res, next) {
    if (req.headers['req-auth-token'] !== '#^&SFHAH@Y%$H@$@$%HG$!$#B!$FBWTRBRTHTHRFHBWR@@%$T!SDFEWF@F@F@@ECW') {
        res.send({
            status: 'Error',
            message: 'Not authorised to access the resource.'
        });
    } else {
        next();
    }
}
app.get('/robots.txt', function(req, res){
    res.sendFile(__dirname + '/dist/robots.txt');
});
app.get('/img_dt/:imgName', function(req, res){
    if (req) {

    }
    res.sendFile(__dirname + '/images/' + req.params.imgName);
});
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});
app.listen(5000);