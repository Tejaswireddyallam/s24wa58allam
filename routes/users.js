var express = require('express');
var router = express.Router();

var product=1,factor=1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  factor = factor + 1;
  product = product * factor;
  res.send('product is :' + product);
});

module.exports = router;
