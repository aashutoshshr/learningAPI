const express = require('express');
const router = express.Router();
// const fetchData = require('../controllers/dataController');
// const addData = require('../controllers/dataController');
const app = express();
import path from 'path';
const data = require('../controllers/dataController');


// router.route('/')
// .get(fetchData);


// define the home page route
router.route('/').get(data.fetchData);

router.route('/post').post(data.addData);

router.route('/:id').delete(data.deleteData);

router.route('/:id').put(data.editData);


module.exports = router;