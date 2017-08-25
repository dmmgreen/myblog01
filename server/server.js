require('./schema/model');
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    user = require('./route/user'),
    article = require('./route/article');

app.use(express.static(__dirname));
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(bodyParser.json());
app.use("*", function (req, res, next) {
    next();
});
app.use('/user', user);
app.use('/article', article);
app.use(function (err, req, res, next) {
    res.status(500).send('broke');
    next();
});

app.listen('3600', function () {
    console.log('start server.js');
});