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

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});