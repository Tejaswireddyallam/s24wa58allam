var express = require('express');
var router = express.Router();

var random;
router.get('/', function(req, res, next) {
  random = Math.random() * 200;
  var x;
  if (req.query.x) {
    x = parseFloat(req.query.x);
  } else {
    x = random;
  }
  var ans1 = Math.atan(x); 
  var ans2 = Math.exp(x); 
  var ans3 = Math.expm1(x);

  var ansstr1 = `Math.atan applied to ${x} is ${ans1}`;
  var ansstr2 = `Math.exp applied to ${x} is ${ans2}`;
  var ansstr3 = `Math.expm1 applied to ${x} is ${ans3}`;

  res.send(`${ansstr1}\n${ansstr2}\n${ansstr3}`);
});

module.exports = router;
