var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* V1 home page. */
router.get('/R1', function (req, res, next) {
  res.render('R1', { title: 'R1 Home page' });
});

/* V2 home page. */
//router.get('/V2', function (req, res, next) {
//  res.render('indexV2', { title: 'V2 Home page' });
//});

// User page
//router.get('/user', function (req, res, next) {
//  res.render('user', { title: 'User' });
//});

// Account page
//router.get('/account', function (req, res, next) {
//  res.render('account', { title: 'Account' });
//});

// R2 page
//router.get('/r2', function (req, res, next) {
//  res.render('r2', { title: 'R2' });
//});

// Contents page
//router.get('/contents', function (req, res, next) {
//  res.render('contents', { title: 'Contents' });
//});

module.exports = router;
