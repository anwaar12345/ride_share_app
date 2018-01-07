var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user');
/* GET users listing. */
router.get('/', userCtrl.getUsers);

module.exports = router;