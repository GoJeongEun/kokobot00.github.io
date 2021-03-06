
const express = require('express');

var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

const app = express();


const server = app.listen(3030, () => {
    console.log('Start Sever : localhost:3030');
});

const { request } = require('express');

app.set ('views', __dirname+'/views');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res){
    res.render('index.html')
});
app.get('/Farmstatus', function (req, res){
    res.render('Farmstatus.html')
});
app.get('/Farmdong', function (req, res){
    res.render('Farmdong.html')
});
app.get('/traceabiltty', function (req, res){
    res.render('traceabiltty.html')
});
app.get('/access_management', function (req, res){
    res.render('access_management.html')
});
app.get('/GP_management', function (req, res){
    res.render('GP_management.html')
});
app.get('/medicine_management', function (req, res){
    res.render('medicine_management.html')
});
app.get('/feed_management', function (req, res){
    res.render('feed_management.html')
});
app.get('/clinical_observation', function (req, res){
    res.render('clinical_observation.html')
});
app.get('/testresults', function (req, res){
    res.render('testresults.html')
});
app.get('/EPIS_management', function (req, res){
    res.render('EPIS_management.html')
});
app.get('/spawn_analysis', function (req, res){
    res.render('spawn_analysis.html')
});
app.get('/hatch_management', function (req, res){
    res.render('hatch_management.html')
});
app.get('/Environmental_management', function (req, res){
    res.render('Environmental_management.html')
});
app.get('/disease_management', function (req, res){
    res.render('disease_management.html')
});
app.get('/management', function (req, res){
    res.render('management.html')
});
app.get('/upbringing_analysis', function (req, res){
    res.render('upbringing_analysis.html')
});
app.get('/haccp_monitoring', function (req, res){
    res.render('haccp_monitoring.html')
});
app.get('/messenger', function (req, res){
    res.render('messenger.html')
});
app.get('/Environmental_analysis', function (req, res){
    res.render('Environmental_analysis.html')
});
