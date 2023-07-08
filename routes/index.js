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

// Account page
router.get('/account', function (req, res, next) {
  res.render('account', { title: 'Account' });
});

module.exports = router;
