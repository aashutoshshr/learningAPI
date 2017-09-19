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

router.route('/post').post(data.addData);

router.route('/:id').delete(data.deleteData);


module.exports = router;