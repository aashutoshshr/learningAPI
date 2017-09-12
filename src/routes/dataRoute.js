const express = require('express');
const router = express.Router();
// const fetchData = require('../controllers/dataController');
// const addData = require('../controllers/dataController');
const app = express();
import path from 'path';


// router.route('/')
// .get(fetchData);

const data = require('../controllers/dataController');

// define the home page route
router.route('/').get(data.fetchData);

// router.route('/post').get(data.addData);

// router.route('/post').post(addData);
// router.post


// define the about route
// router.get('/data', function (req, res) {
//   res.sendFile(path.join(__dirname, '../index.html'));
// });

module.exports = router;