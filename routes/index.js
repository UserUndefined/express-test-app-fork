var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// User page
router.get('/user', function (req, res, next) {
  res.render('user', { title: 'User' });
});

// R1 page
router.get('/r1', function (req, res, next) {
  res.render('r1', { title: 'R1' });
});

module.exports = router;
