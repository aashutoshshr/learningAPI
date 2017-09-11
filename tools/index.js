import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);
const dataRoute = require('../src/routes/dataRoute');

// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/mydb', function (err, db) {
//   if (err) throw err;

//   db.collection('mydata').find().toArray(function (err, result) {
//     if (err) throw err;

//     console.log(result);
//   });
// });

mongoose.connect('mongodb://localhost/mydb');
let db = mongoose.connection;


db.once('open', function(){
  console.log("connected to mongodb");
});

db.on('error', function (err) {
  console.log(err);  
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'
  ));
});

app.use('/data', dataRoute);

// app.get('/data', function (req, res) {
//   Info.find({}, function(err, info){
//     // res.send('data', {
//     //   info.name,
//     //   address: info.address,
//     //   comment: info.comment
//     // });
//     console.log(info);
//   });  
// });

// app.get('/sunil', function(req, res){
//   // res.send('Sunil Chor Ho');
//   Info.find({}, function(err, infos){
//     res.render('index', {
//       info: infos
//     });
//   });
// });
// app.post('/sunil', function(req, res){
//   res.send('sunil chor nai ho '+req.body);
  
// });

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});