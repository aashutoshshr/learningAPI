const express = require('express')
const app = express()
var path = require('path');

 app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})