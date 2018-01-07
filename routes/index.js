var user = require('../controllers/user');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 1' });
});

router.get('/signup', function(req, res){
  res.render('signup.ejs');
});


router.get('/login', function(req, res){
  res.render('login.ejs');
});


module.exports = router;
